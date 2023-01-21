import { TypedEventTarget } from './TypedEventTarget';

export type NoiseEvent = CustomEvent<{ type: string }>;

export type NoiseEventMap = {
  noise: NoiseEvent;
};

class NoiseEventEmitter extends (EventTarget as TypedEventTarget<NoiseEventMap>) {
  public emit(type: string) {
    this.dispatchEvent(
      new CustomEvent('noise', {
        detail: {
          type,
        },
      }),
    );
  }
}

export const noiseEventEmitter = new NoiseEventEmitter();
