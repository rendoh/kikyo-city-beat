import { TypedEventTarget } from './TypedEventTarget';

export type ResizeEvent = CustomEvent<never>;

export type SizeskEventMap = {
  resize: ResizeEvent;
};

class Sizes extends (EventTarget as TypedEventTarget<SizeskEventMap>) {
  public pixelRatio = Math.min(window.devicePixelRatio, 2);
  public w = window.innerWidth * this.pixelRatio;
  public h = window.innerHeight * this.pixelRatio;
  private handleResize = this.update.bind(this);
  constructor() {
    super();
    window.addEventListener('resize', this.handleResize);
  }

  private update() {
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);
    this.w = window.innerWidth * this.pixelRatio;
    this.h = window.innerHeight * this.pixelRatio;
    this.dispatchEvent(new CustomEvent('resize') satisfies ResizeEvent);
  }

  public dispose() {
    window.removeEventListener('resize', this.handleResize);
  }
}

export const sizes = new Sizes();
