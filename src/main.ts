import * as Tone from 'tone';
import { clock } from './clock';
import { GbChannel } from './GbChannel';
import { GbNoise, GbNoiseData } from './GbNoise';
import { keyState } from './keyState';
import { sizes } from './sizes';

class Canvas {
  private canvas = document.createElement('canvas');
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  private ctx = this.canvas.getContext('2d')!;
  private handleResize = this.resize.bind(this);
  private handleTick = this.update.bind(this);

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

    const radius = Math.min(w, h) * 0.4;
    const keyboardHeight = Math.min(w, h) / 35;

    ctx.fillStyle = '#fc0303';
    ctx.strokeStyle = '#333';
    ctx.lineWidth = Math.min(w, h) / 50;
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, radius - keyboardHeight / 2, 0, Math.PI, true);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;

    ctx.translate(w / 2, h / 2);
    ctx.rotate(Math.PI / 2 + clock.elapsed * 0.00025);
    ctx.translate(-w / 2, -h / 2);

    ctx.translate(w / 2, h / 2);

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

    ctx.resetTransform();
  }

  public dispose() {
    sizes.removeEventListener('resize', this.handleResize);
    clock.removeEventListener('tick', this.handleTick);
  }
}

new Canvas();

new GbChannel([
  // 1 ---
  [
    { note: 'G#4', dur: '16n' },
    { note: 'A#4', dur: '16n' },
  ],
  [
    { note: 'B4', dur: '16n' },
    { note: 'D#5', dur: '4n' },
  ],
  [null, { note: 'C#5', dur: '8n' }],
  [
    { note: 'A#4', dur: '8n' },
    { note: 'G#4', dur: '8n' },
  ],

  // 2 ---
  [
    { note: 'F#4', dur: '16n' },
    { note: 'G#4', dur: '16n' },
  ],
  [
    { note: 'A#4', dur: '16n' },
    { note: 'C#5', dur: '4n' },
  ],
  [null, { note: 'B4', dur: '8n' }],
  [
    { note: 'A#4', dur: '8n' },
    { note: 'B4', dur: '8n' },
  ],

  // 3 ---
  [
    { note: 'G#4', dur: '16n' },
    { note: 'A#4', dur: '16n' },
  ],
  [
    { note: 'B4', dur: '16n' },
    { note: 'G#4', dur: '4n' },
  ],
  [null, { note: 'A#4', dur: '8n' }],
  [
    { note: 'B4', dur: '8n' },
    { note: 'C#5', dur: '8n' },
  ],

  // 4 ---
  [
    { note: 'D#5', dur: '8n' },
    { note: 'F#4', dur: '8n' },
  ],
  [
    { note: 'D#5', dur: '16n' },
    { note: 'C#5', dur: '4n' },
  ],
  null,
  [
    null,
    [
      { note: 'D#5', dur: '16n' },
      { note: 'E5', dur: '16n' },
    ],
  ],

  // 5 ---
  { note: 'F#5', dur: '3n' },
  [
    null,
    [
      { note: 'F#5', dur: '16n' },
      { note: 'G#5', dur: '16n' },
    ],
  ],
  [
    { note: 'F#5', dur: '16n' },
    { note: 'E5', dur: '16n' },
  ],
  [
    { note: 'D#5', dur: '16n' },
    { note: 'F#5', dur: '16n' },
  ],

  // 6 ---
  { note: 'E5', dur: '2n' },
  null,
  null,
  [
    null,
    [
      { note: 'C#5', dur: '16n' },
      { note: 'D#5', dur: '16n' },
    ],
  ],

  // 7 ---
  { note: 'E5', dur: '3n' },
  [
    null,
    [
      { note: 'E5', dur: '16n' },
      { note: 'F#5', dur: '16n' },
    ],
  ],
  [
    { note: 'E5', dur: '16n' },
    { note: 'D#5', dur: '16n' },
  ],
  [
    { note: 'C#5', dur: '16n' },
    { note: 'E5', dur: '16n' },
  ],

  // 8 ---
  { note: 'D#5', dur: '2n' },
  null,
  null,
  [
    null,
    [
      { note: 'B4', dur: '16n' },
      { note: 'C#5', dur: '16n' },
    ],
  ],

  // 9 ---
  { note: 'D#5', dur: '4n' },
  [
    null,
    [
      { note: 'D#5', dur: '16n' },
      { note: 'E5', dur: '16n' },
    ],
  ],
  [
    { note: 'D#5', dur: '16n' },
    { note: 'C#5', dur: '16n' },
  ],
  [
    { note: 'B4', dur: '8n' },
    { note: 'C#5', dur: '16n' },
  ],

  // 10 ---
  { note: 'D#5', dur: '4n' },
  { note: 'G#5', dur: '4n' },
  { note: 'B5', dur: '4n' },
  [
    null,
    [
      { note: 'C#5', dur: '16n' },
      { note: 'D#5', dur: '16n' },
    ],
  ],

  // 11 ---
  [
    { note: 'E5', dur: '8n' },
    { note: 'G#4', dur: '8n' },
  ],
  [
    { note: 'B4', dur: '8n' },
    { note: 'E5', dur: '8n' },
  ],
  [
    { note: 'D#5', dur: '16n' },
    { note: 'F#4', dur: '16n' },
    { note: 'B4', dur: '16n' },
    { note: 'D#5', dur: '16n' },
  ],
  [
    { note: 'C#5', dur: '16n' },
    { note: 'E4', dur: '16n' },
    { note: 'A#4', dur: '16n' },
    { note: 'C#5', dur: '16n' },
  ],

  // 12 ---
  { note: 'B4', dur: '2n' },
  null,
  null,
  null,

  // 13 ---
  [
    null,
    [
      { note: 'B4', dur: '16n' },
      { note: 'C#5', dur: '16n' },
    ],
  ],
  [
    { note: 'D5', dur: '8n' },
    { note: 'F#5', dur: '8n' },
  ],
  [
    { note: 'E5', dur: '8n' },
    [
      { note: 'D5', dur: '24n' },
      { note: 'E5', dur: '24n' },
      { note: 'D5', dur: '24n' },
    ],
  ],
  [
    { note: 'C#5', dur: '8n' },
    { note: 'B4', dur: '16n' },
  ],

  // 14 ---
  [
    { note: 'A4', dur: '8n' },
    { note: 'F#4', dur: '16n' },
  ],
  [
    { note: 'A4', dur: '8n' },
    { note: 'E5', dur: '4n' },
  ],
  [null, { note: 'D5', dur: '4n' }],
  [null, { note: 'C#5', dur: '8n' }],

  // 15 ---
  [
    { note: 'B4', dur: '16n' },
    [
      { note: 'G5', dur: '16n' },
      { note: 'A5', dur: '16n' },
    ],
  ],
  [
    { note: 'B5', dur: '8n' },
    { note: 'D6', dur: '8n' },
  ],
  [
    { note: 'C#6', dur: '8n' },
    [
      { note: 'B5', dur: '24n' },
      { note: 'C#6', dur: '24n' },
      { note: 'B5', dur: '24n' },
    ],
  ],
  [
    { note: 'A5', dur: '8n' },
    { note: 'G5', dur: '16n' },
  ],

  // 16 ---
  [
    { note: 'F#5', dur: '8n' },
    { note: 'C#5', dur: '16n' },
  ],
  [
    { note: 'F#5', dur: '8n' },
    { note: 'E6', dur: '4n' },
  ],
  [null, { note: 'F#6', dur: '4n' }],
  [
    null,
    [
      { note: 'D6', dur: '16n' },
      { note: 'E6', dur: '16n' },
    ],
  ],

  // 17 ---
  { note: 'F#6', dur: '3n' },
  null,
  null,
  [
    null,
    [
      { note: 'D6', dur: '16n' },
      { note: 'E6', dur: '16n' },
    ],
  ],

  // 18 ---
  { note: 'F#6', dur: '3n' },
  null,
  null,
  [
    null,
    [
      { note: 'A#5', dur: '16n' },
      { note: 'B5', dur: '16n' },
    ],
  ],

  // 19 ---
  { note: 'C#6', dur: '2n' },
  null,
  null,
  null,

  // 20 ---
  { note: 'A#5', dur: '3n' },
  [
    null,
    [
      { note: 'A5', dur: '16n' },
      { note: 'G#5', dur: '16n' },
    ],
  ],
  { note: 'F#5', dur: '4n' },
  [
    null,
    [
      { note: 'D#5', dur: '16n' },
      { note: 'E5', dur: '16n' },
    ],
  ],
]);

new GbChannel([
  // 1 ---
  null,
  [
    { note: 'G#4', dur: '16n' },
    { note: 'A#4', dur: '4n' },
  ],
  [null, { note: 'G#4', dur: '8n' }],
  [{ note: 'F#4', dur: '8n' }, null],

  // 2 ---
  null,
  [
    { note: 'F#4', dur: '16n' },
    { note: 'D#4', dur: '4n' },
  ],
  [null, { note: 'G#4', dur: '8n' }],
  [{ note: 'D#4', dur: '8n' }, null],

  // 3 ---
  null,
  [
    { note: 'G#4', dur: '16n' },
    { note: 'B3', dur: '4n' },
  ],
  [
    null,
    [
      { note: 'C#4', dur: '8n' },
      { note: 'F4', dur: '8n' },
    ],
  ],
  [
    [
      { note: 'C#4', dur: '16n' },
      { note: 'F#4', dur: '16n' },
      { note: 'G#4', dur: '16n' },
      { note: 'B4', dur: '16n' },
    ],
  ],

  // 4 ---
  { note: 'B3', dur: '4n' },
  [null, { note: 'C#4', dur: '4n' }],
  null,
  null,

  // 5 ---
  [
    null,
    [
      { note: 'B3', dur: '16n' },
      { note: 'C#4', dur: '16n' },
    ],
  ],
  [
    { note: 'D#4', dur: '8n' },
    [
      { note: 'D#4', dur: '16n' },
      { note: 'E4', dur: '16n' },
    ],
  ],
  [
    { note: 'D#4', dur: '16n' },
    { note: 'F#4', dur: '16n' },
  ],
  [
    { note: 'G#4', dur: '16n' },
    { note: 'B4', dur: '16n' },
  ],

  // 6 ---
  [
    { note: 'C#5', dur: '16n' },
    { note: 'G#4', dur: '16n' },
    { note: 'E4', dur: '16n' },
    { note: 'C#5', dur: '16n' },
  ],
  [
    { note: 'C5', dur: '16n' },
    { note: 'G#4', dur: '16n' },
    { note: 'E4', dur: '16n' },
    { note: 'C5', dur: '16n' },
  ],
  [
    { note: 'B4', dur: '16n' },
    { note: 'B4', dur: '16n' },
  ],
  { note: 'A#4', dur: '4n' },

  // 7 ---
  [
    null,
    [
      { note: 'C#4', dur: '16n' },
      { note: 'E4', dur: '16n' },
    ],
  ],
  [
    { note: 'A#4', dur: '8n' },
    [
      { note: 'A#4', dur: '16n' },
      { note: 'C#5', dur: '16n' },
    ],
  ],
  [
    { note: 'A#4', dur: '16n' },
    { note: 'F#4', dur: '16n' },
  ],
  [
    { note: 'E4', dur: '16n' },
    { note: 'C#4', dur: '16n' },
  ],

  // 8 ---
  { note: 'D#4', dur: '4n' },
  { note: 'E4', dur: '4n' },
  [
    { note: 'F4', dur: '16n' },
    { note: 'F4', dur: '16n' },
  ],
  [
    { note: 'F#4', dur: '16n' },
    { note: 'G4', dur: '16n' },
  ],

  // 9 ---
  [
    { note: 'G#4', dur: '16n' },
    { note: 'D#4', dur: '16n' },
    { note: 'B3', dur: '16n' },
    { note: 'D#4', dur: '16n' },
  ],
  [
    { note: 'B4', dur: '8n' },
    { note: 'G#4', dur: '8n' },
  ],
  [
    { note: 'A#4', dur: '16n' },
    { note: 'A#4', dur: '16n' },
  ],
  [
    { note: 'D#4', dur: '8n' },
    { note: 'F#4', dur: '16n' },
  ],

  // 10 ---
  null,
  null,
  [
    { note: 'F5', dur: '16n' },
    [null, null, { note: 'G#5', dur: '32n' }, { note: 'B5', dur: '32n' }],
  ],
  { note: 'D#6', dur: '4n' },

  // 11 ---
  null,
  null,
  null,
  null,

  // 12 ---
  [
    { note: 'E4', dur: '16n' },
    { note: 'B3', dur: '16n' },
    { note: 'G#3', dur: '16n' },
    { note: 'E4', dur: '16n' },
  ],
  [
    { note: 'B3', dur: '16n' },
    { note: 'G#3', dur: '16n' },
    { note: 'B3', dur: '16n' },
    { note: 'E4', dur: '16n' },
  ],
  { note: 'D#4', dur: '4n' },
  null,

  // 13 ---
  [
    null,
    [
      { note: 'G4', dur: '16n' },
      { note: 'A4', dur: '16n' },
    ],
  ],
  [
    { note: 'B4', dur: '8n' },
    { note: 'D5', dur: '8n' },
  ],
  [
    { note: 'C#5', dur: '8n' },
    [
      { note: 'B4', dur: '24n' },
      { note: 'C#5', dur: '24n' },
      { note: 'B4', dur: '24n' },
    ],
  ],
  [
    { note: 'A4', dur: '8n' },
    { note: 'F#4', dur: '16n' },
  ],

  // 14 ---
  [
    { note: 'F#4', dur: '8n' },
    { note: 'C#4', dur: '16n' },
  ],
  [
    { note: 'F#4', dur: '8n' },
    { note: 'D4', dur: '4n' },
  ],
  [null, { note: 'E4', dur: '4n' }],
  [null, { note: 'F#4', dur: '8n' }],

  // 15 ---
  [
    { note: 'D4', dur: '16n' },
    [
      { note: 'B4', dur: '16n' },
      { note: 'C#5', dur: '16n' },
    ],
  ],
  [
    { note: 'D5', dur: '8n' },
    { note: 'F#5', dur: '8n' },
  ],
  [
    { note: 'E5', dur: '8n' },
    [
      { note: 'D5', dur: '24n' },
      { note: 'E5', dur: '24n' },
      { note: 'D5', dur: '24n' },
    ],
  ],
  [
    { note: 'C#5', dur: '8n' },
    { note: 'B4', dur: '16n' },
  ],

  // 16 ---
  [
    { note: 'A4', dur: '8n' },
    { note: 'F#4', dur: '16n' },
  ],
  [
    { note: 'A4', dur: '8n' },
    { note: 'E5', dur: '4n' },
  ],
  [null, { note: 'D5', dur: '4n' }],
  [null, { note: 'C#5', dur: '8n' }],

  // 17 ---
  [
    { note: 'G#5', dur: '16n' },
    { note: 'E5', dur: '16n' },
    { note: 'B4', dur: '16n' },
    { note: 'E5', dur: '16n' },
  ],
  [
    { note: 'G#5', dur: '16n' },
    [
      { note: 'G#5', dur: '16n' },
      { note: 'A#5', dur: '16n' },
    ],
  ],
  { note: 'B5', dur: '4n' },
  null,

  // 18 ---
  [
    { note: 'G#5', dur: '16n' },
    { note: 'F5', dur: '16n' },
    { note: 'B4', dur: '16n' },
    { note: 'F5', dur: '16n' },
  ],
  [
    { note: 'G#5', dur: '16n' },
    [
      { note: 'G#5', dur: '16n' },
      { note: 'A#5', dur: '16n' },
    ],
  ],
  { note: 'B5', dur: '4n' },
  null,

  // 19 ---
  [
    { note: 'C#5', dur: '16n' },
    { note: 'B4', dur: '16n' },
    { note: 'F#4', dur: '16n' },
    { note: 'C#5', dur: '16n' },
  ],
  [
    { note: 'B4', dur: '16n' },
    { note: 'F#4', dur: '16n' },
    { note: 'C#5', dur: '16n' },
    { note: 'B4', dur: '16n' },
  ],
  [
    { note: 'F#4', dur: '16n' },
    { note: 'C#4', dur: '16n' },
    { note: 'F#4', dur: '16n' },
    { note: 'A#4', dur: '16n' },
  ],
  [
    { note: 'C#5', dur: '16n' },
    { note: 'F#5', dur: '16n' },
    { note: 'A#5', dur: '16n' },
    { note: 'C#6', dur: '16n' },
  ],

  // 20 ---
  { note: 'C#5', dur: '4n' },
  [
    null,
    [
      { note: 'C5', dur: '16n' },
      { note: 'B4', dur: '16n' },
    ],
  ],
  { note: 'C#5', dur: '4n' },
  null,
]);

new GbChannel([
  // 1 ---
  [
    [
      { note: 'E3', dur: '16n' },
      { note: 'G#3', dur: '16n' },
      { note: 'B3', dur: '16n' },
      { note: 'D#4', dur: '16n' },
    ],
  ],
  [null, { note: 'E4', dur: '4n' }],
  null,
  [null, { note: 'C#4', dur: '8n' }],

  // 2 ---
  [
    [
      { note: 'D#3', dur: '16n' },
      { note: 'F#3', dur: '16n' },
      { note: 'A#3', dur: '16n' },
      { note: 'C#4', dur: '16n' },
    ],
  ],
  [null, { note: 'G#3', dur: '4n' }],
  null,
  [null, { note: 'G#3', dur: '8n' }],

  // 3 ---
  [
    [
      { note: 'C#3', dur: '16n' },
      { note: 'E3', dur: '16n' },
      { note: 'G#3', dur: '16n' },
      { note: 'B3', dur: '16n' },
    ],
  ],
  [null, { note: 'F3', dur: '4n' }],
  null,
  null,

  // 4 ---
  { note: 'E2', dur: '4n' },
  [
    { note: 'C#3', dur: '16n' },
    { note: 'A#3', dur: '4n' },
  ],
  [
    null,
    [
      { note: 'A3', dur: '16n' },
      { note: 'G#3', dur: '16n' },
    ],
  ],
  [
    { note: 'F#3', dur: '8n' },
    { note: 'A#2', dur: '8n' },
  ],

  // 5 ---
  [{ note: 'B2', dur: '16n' }, null],
  [
    null,
    [
      { note: 'B2', dur: '16n' },
      { note: 'B2', dur: '16n' },
    ],
  ],
  [null, { note: 'B2', dur: '16n' }],
  [
    { note: 'F#3', dur: '8n' },
    { note: 'F#2', dur: '16n' },
  ],

  // 6 ---
  [{ note: 'C#3', dur: '16n' }, null],
  [
    null,
    [
      { note: 'C#3', dur: '16n' },
      { note: 'C#3', dur: '16n' },
    ],
  ],
  [null, { note: 'C#3', dur: '16n' }],
  [
    { note: 'G#3', dur: '8n' },
    { note: 'G#2', dur: '16n' },
  ],

  // 7 ---
  { note: 'F#2', dur: '16n' },
  [
    null,
    [
      { note: 'F#2', dur: '16n' },
      { note: 'F#2', dur: '16n' },
    ],
  ],
  [
    { note: 'F#2', dur: '16n' },
    { note: 'F#2', dur: '16n' },
  ],
  [
    { note: 'F#3', dur: '16n' },
    { note: 'C#3', dur: '16n' },
  ],

  // 8 ---
  { note: 'B2', dur: '16n' },
  [
    null,
    [
      { note: 'B2', dur: '16n' },
      { note: 'B2', dur: '16n' },
    ],
  ],
  [null, { note: 'B2', dur: '16n' }],
  { note: 'B3', dur: '4n' },

  // 9 ---
  { note: 'G#3', dur: '16n' },
  [
    null,
    [
      { note: 'G#3', dur: '16n' },
      { note: 'G#3', dur: '16n' },
    ],
  ],
  [
    { note: 'G3', dur: '16n' },
    { note: 'G3', dur: '16n' },
  ],
  [
    { note: 'F#3', dur: '8n' },
    { note: 'F#3', dur: '16n' },
  ],

  // 10 ---
  [
    { note: 'C#3', dur: '16n' },
    { note: 'F3', dur: '16n' },
    { note: 'G#3', dur: '16n' },
    { note: 'B3', dur: '16n' },
  ],
  [
    { note: 'C#4', dur: '16n' },
    { note: 'F4', dur: '16n' },
    { note: 'G#4', dur: '16n' },
    { note: 'B4', dur: '16n' },
  ],
  { note: 'C#4', dur: '4n' },
  null,

  // 11 ---
  { note: 'E2', dur: '16n' },
  [
    null,
    [
      { note: 'E2', dur: '16n' },
      { note: 'E2', dur: '16n' },
    ],
  ],
  [
    { note: 'F2', dur: '16n' },
    { note: 'F2', dur: '16n' },
  ],
  [
    { note: 'C#3', dur: '8n' },
    { note: 'C3', dur: '16n' },
  ],

  // 12 ---
  { note: 'B2', dur: '16n' },
  [
    null,
    [
      { note: 'B2', dur: '16n' },
      { note: 'B2', dur: '16n' },
    ],
  ],
  [null, { note: 'B2', dur: '16n' }],
  { note: 'A2', dur: '4n' },

  // 13 ---
  { note: 'G2', dur: '16n' },
  [
    null,
    [
      { note: 'G2', dur: '16n' },
      { note: 'G2', dur: '16n' },
    ],
  ],
  [
    { note: 'A2', dur: '16n' },
    { note: 'A2', dur: '16n' },
  ],

  [
    { note: 'E3', dur: '8n' },
    { note: 'A2', dur: '16n' },
  ],

  // 14 ---
  { note: 'F#2', dur: '16n' },
  [
    null,
    [
      { note: 'B2', dur: '16n' },
      { note: 'B2', dur: '16n' },
    ],
  ],
  [
    { note: 'B2', dur: '16n' },
    { note: 'A#2', dur: '4n' },
  ],
  [null, { note: 'A2', dur: '16n' }],

  // 15 ---
  { note: 'G2', dur: '16n' },
  [
    null,
    [
      { note: 'G2', dur: '16n' },
      { note: 'G2', dur: '16n' },
    ],
  ],
  [
    { note: 'A2', dur: '16n' },
    { note: 'A2', dur: '16n' },
  ],
  [
    { note: 'E3', dur: '8n' },
    { note: 'A2', dur: '16n' },
  ],

  // 16 ---
  { note: 'F#2', dur: '16n' },
  [
    null,
    [
      { note: 'B2', dur: '16n' },
      { note: 'B2', dur: '16n' },
    ],
  ],
  [
    { note: 'B2', dur: '16n' },
    { note: 'A#2', dur: '4n' },
  ],
  [null, { note: 'A2', dur: '16n' }],

  // 17 ---
  { note: 'E3', dur: '16n' },
  [
    null,
    [
      { note: 'E3', dur: '16n' },
      { note: 'E3', dur: '16n' },
    ],
  ],
  [null, { note: 'E3', dur: '16n' }],
  [
    { note: 'B3', dur: '8n' },
    [
      { note: 'G3', dur: '16n' },
      { note: 'F#3', dur: '16n' },
    ],
  ],

  // 18 ---
  { note: 'F3', dur: '16n' },
  [
    null,
    [
      { note: 'F3', dur: '16n' },
      { note: 'F3', dur: '16n' },
    ],
  ],
  [null, { note: 'F3', dur: '16n' }],
  [
    { note: 'C#4', dur: '8n' },
    [
      { note: 'A#3', dur: '16n' },
      { note: 'G#3', dur: '16n' },
    ],
  ],

  // 19 ---
  { note: 'F#3', dur: '16n' },
  [
    null,
    [
      { note: 'F#3', dur: '16n' },
      { note: 'F#3', dur: '16n' },
    ],
  ],
  [
    { note: 'F#2', dur: '16n' },
    { note: 'F#2', dur: '16n' },
  ],
  [
    { note: 'F#3', dur: '8n' },
    [
      { note: 'F#2', dur: '16n' },
      { note: 'G#2', dur: '16n' },
    ],
  ],

  // 20 ---
  { note: 'F#3', dur: '2n' },
  [
    null,
    [
      { note: 'G#3', dur: '16n' },
      { note: 'A3', dur: '16n' },
    ],
  ],
  { note: 'A#3', dur: '4n' },
  [null, { note: 'A#2', dur: '4n' }],
]);

const noisePatternA: GbNoiseData = [
  ['snare', 'snare', 'kick', 'kick'],
  ['snare', 'hihat'],
  ['hihat', 'hihat', 'hihat', null],
  ['hihat', 'hihat', 'hihat', 'hihat'],
];

const noisePatternB: GbNoiseData = [
  ['kick', ['hihat', 'hihat']],
  ['hihat', ['kick', 'kick']],
  [null, 'kick'],
  ['snare', 'kick'],
];

new GbNoise([
  // 1 --- intro
  ['kick', 'snare'],
  ['kick', 'kick', 'snare', null],
  'snare',
  'roll',

  // 2 --- A
  ...[...Array(3)].flatMap(() => noisePatternA),

  // 5 ---
  ['snare', null, 'kick', 'kick'],
  ['snare', 'snare'],
  null,
  [null, 'kick'],

  // 6 --- B
  ...[...Array(16)].flatMap(() => noisePatternB),
]);

Tone.Transport.bpm.value = 116.6;
Tone.Transport.setLoopPoints('5m', '21m');
Tone.Transport.loop = true;

document.querySelector('#play')?.addEventListener('click', async () => {
  await Tone.start();
  Tone.Transport.toggle();
});
