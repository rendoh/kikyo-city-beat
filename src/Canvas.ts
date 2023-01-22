import { clock } from './clock';
import { keyState } from './keyState';
import { NoiseEvent, noiseEventEmitter } from './noiseEventEmitter';
import { sizes } from './sizes';
import { lerp } from './utils';

export class Canvas {
  private canvas = document.createElement('canvas');
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  private ctx = this.canvas.getContext('2d')!;
  private handleResize = this.resize.bind(this);
  private handleTick = this.update.bind(this);
  private handleNoise = ({ detail: { type } }: NoiseEvent) => {
    this.bound = type === 'kick' ? -2 : 1;
  };
  private radius = 0;
  private keyboardHeight = 0;
  private iconColor = '#333';
  private isPlaying = false;
  private bound = 0;
  private rotation = 0;

  constructor() {
    Object.assign(this.canvas.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      display: 'block',
      pointerEvents: 'none',
    } satisfies Partial<CSSStyleDeclaration>);
    document.body.appendChild(this.canvas);

    this.resize();
    sizes.addEventListener('resize', this.handleResize);
    clock.addEventListener('tick', this.handleTick);
    noiseEventEmitter.addEventListener('noise', this.handleNoise);
    this.ctx.imageSmoothingQuality = 'low';
  }

  private resize() {
    this.canvas.setAttribute('width', `${sizes.w}px`);
    this.canvas.setAttribute('height', `${sizes.h}px`);
    Object.assign(this.canvas.style, {
      width: `${sizes.w / sizes.pixelRatio}px`,
      height: `${sizes.h / sizes.pixelRatio}px`,
    });
  }

  private update() {
    const { ctx } = this;
    const { w, h } = sizes;
    ctx.clearRect(0, 0, w, h);
    this.radius = Math.min(w, h) * 0.4;
    this.keyboardHeight = Math.min(w, h) / 35;
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;

    this.drawBall();

    this.drawKeys();
  }

  private drawBall() {
    const { ctx, radius, keyboardHeight } = this;
    const { w, h } = sizes;
    ctx.save();
    ctx.fillStyle = '#fc0303';
    ctx.strokeStyle = '#333';
    ctx.lineWidth = Math.min(w, h) / 50;
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, radius - keyboardHeight / 2, 0, Math.PI, true);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    this.drawPlayButton();
    ctx.restore();
  }

  private drawPlayButton() {
    const { ctx, radius } = this;
    const { w, h } = sizes;

    const ratio60 = 0.3;
    const delta60 = 16;
    const ratio = 1 - Math.pow(1 - ratio60, clock.delta / delta60);
    this.bound = lerp(this.bound, 0, ratio);

    const scalar = 1 + this.bound / 7;
    ctx.lineWidth = ctx.lineWidth * (1 / scalar);
    ctx.translate(w / 2, h / 2);
    ctx.scale(scalar, scalar);
    ctx.translate(-w / 2, -h / 2);

    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, radius / 4, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.lineWidth = 2 * (1 / scalar);
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, radius / 5, 0, Math.PI * 2);
    ctx.closePath();
    ctx.stroke();

    ctx.fillStyle = this.iconColor;
    if (this.isPlaying) {
      this.drawPauseIcon();
    } else {
      this.drawPlayIcon();
    }
  }

  private drawPlayIcon() {
    const { ctx, radius } = this;
    const { w, h } = sizes;
    const half = radius / 10;
    ctx.save();
    ctx.translate(w / 2 + half / 4, h / 2);
    ctx.beginPath();
    ctx.moveTo(-half, -half);
    ctx.lineTo(half, 0);
    ctx.lineTo(-half, half);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  private drawPauseIcon() {
    const { ctx, radius } = this;
    const { w, h } = sizes;
    const half = radius / 10;
    const bar = half * 0.65;
    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(-half, -half);
    ctx.lineTo(-half + bar, -half);
    ctx.lineTo(-half + bar, half);
    ctx.lineTo(-half, half);
    ctx.closePath();
    ctx.moveTo(half - bar, -half);
    ctx.lineTo(half, -half);
    ctx.lineTo(half, half);
    ctx.lineTo(half - bar, half);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  private drawKeys() {
    const { ctx } = this;
    const { w, h } = sizes;

    if (this.isPlaying) {
      this.rotation += clock.delta * 0.00025;
    }
    ctx.translate(w / 2, h / 2);
    ctx.rotate(Math.PI / 2 + this.rotation);
    ctx.translate(-w / 2, -h / 2);

    ctx.translate(w / 2, h / 2);
    this.drawBlackKeys();
    this.drawWhiteKeys();
    ctx.resetTransform();
  }

  private drawBlackKeys() {
    const { ctx, radius, keyboardHeight } = this;
    const outerRadius = radius + keyboardHeight * 0.4;
    for (let i = 0; i < keyState.whiteKeyLength; i++) {
      const skip = i % 7 === 2 || i % 7 === 6;
      if (skip) {
        continue;
      }

      const unitRad = (Math.PI * 2) / keyState.whiteKeyLength;
      const shift = unitRad / 2;
      const offsetWidthRad = unitRad / 6;
      const rad1 = unitRad * i + shift + offsetWidthRad;
      const rad2 = unitRad * (i + 1) + shift - offsetWidthRad;
      const x1 = Math.cos(rad1);
      const y1 = Math.sin(rad1);
      const x2 = Math.cos(rad2);
      const y2 = Math.sin(rad2);
      ctx.beginPath();
      ctx.moveTo(x1 * radius, y1 * radius);
      ctx.lineTo(x1 * outerRadius, y1 * outerRadius);
      ctx.lineTo(x2 * outerRadius, y2 * outerRadius);
      ctx.lineTo(x2 * radius, y2 * radius);
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = keyState.isActiveAt(i, true) ? '#fcba03' : '#333';
      ctx.fill();
    }
  }

  private drawWhiteKeys() {
    const { ctx, radius, keyboardHeight } = this;
    const innerRadius = radius - keyboardHeight;
    ctx.save();
    for (let i = 0; i < keyState.whiteKeyLength; i++) {
      const unitRad = (Math.PI * 2) / keyState.whiteKeyLength;
      const rad1 = unitRad * i;
      const rad2 = unitRad * (i + 1);
      const x1 = Math.cos(rad1);
      const y1 = Math.sin(rad1);
      const x2 = Math.cos(rad2);
      const y2 = Math.sin(rad2);

      ctx.fillStyle = keyState.isActiveAt(i, false) ? '#fcba03' : '#fff';
      ctx.beginPath();
      ctx.moveTo(x1 * radius, y1 * radius);
      ctx.lineTo(x1 * innerRadius, y1 * innerRadius);
      ctx.lineTo(x2 * innerRadius, y2 * innerRadius);
      ctx.lineTo(x2 * radius, y2 * radius);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
    }
    ctx.restore();
  }

  public dispose() {
    sizes.removeEventListener('resize', this.handleResize);
    clock.removeEventListener('tick', this.handleTick);
    noiseEventEmitter.removeEventListener('noise', this.handleNoise);
  }

  public activateIconColor() {
    this.iconColor = '#fcba03';
  }

  public deactivateIconColor() {
    this.iconColor = '#333';
  }

  public toggle() {
    this.isPlaying = !this.isPlaying;
  }
}
