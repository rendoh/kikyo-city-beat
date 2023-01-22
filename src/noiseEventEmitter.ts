import { TypedEventTarget } from './TypedEventTarget';

export type GbNoiseType = 'kick' | 'hihat' | 'snare' | 'roll' | null;

export type NoiseEvent = CustomEvent<{ type: GbNoiseType }>;

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
