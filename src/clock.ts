import { TypedEventTarget } from './TypedEventTarget';

export type TickEvent = CustomEvent<{ elapsed: number; delta: number }>;

export type ClockEventMap = {
  tick: TickEvent;
};

class Clock extends (EventTarget as TypedEventTarget<ClockEventMap>) {
  public elapsed = 0; // 経過時間
  public delta = 16; // 差分: 前回更新時からの経過時間
  private id?: number;

  constructor() {
    super();
    this.tick(0);
  }

  private tick(time: number) {
    this.delta = time - this.elapsed;
    this.elapsed = time;
    this.dispatchEvent(
      new CustomEvent('tick', {
        detail: {
          elapsed: this.elapsed,
          delta: this.delta,
        },
      }) satisfies TickEvent,
    );

    this.id = requestAnimationFrame((time) => {
      this.tick(time);
    });
  }

  public dispose() {
    if (this.id != null) {
      cancelAnimationFrame(this.id);
    }
  }
}

export const clock = new Clock();
