import * as Tone from 'tone';
import { TransportTime } from 'tone/build/esm/core/type/Units';
import { GbNoiseType, noiseEventEmitter } from './noiseEventEmitter';

export type GbNoiseData = Required<
  ConstructorParameters<typeof Tone.Sequence<GbNoiseType>>
>[0]['events'];

export class GbNoise {
  private kick = new Tone.NoiseSynth({
    envelope: {
      attack: 0.005,
      decay: 0.12,
      sustain: 0.005,
    },
    noise: {
      type: 'brown',
      playbackRate: 0.2,
      volume: 8,
    },
  }).toDestination();
  private snare = new Tone.NoiseSynth({
    envelope: {
      attack: 0.01,
      decay: 0.28,
      sustain: 0.01,
    },
    noise: {
      type: 'white',
      volume: -8,
    },
  }).toDestination();
  private hihat = new Tone.NoiseSynth({
    envelope: {
      attack: 0.01,
      decay: 0.18,
      sustain: 0,
    },
    noise: {
      type: 'pink',
      volume: -6,
    },
  }).toDestination();
  private crash = new Tone.NoiseSynth({
    envelope: {
      attack: 0.01,
      decay: 0.3,
      sustain: 0.12,
    },
    noise: {
      type: 'white',
      volume: -7,
    },
  }).toDestination();
  private sequence: Tone.Sequence<GbNoiseType>;
  private isMuted = false;

  constructor(data: GbNoiseData) {
    this.sequence = new Tone.Sequence(this.update.bind(this), data, '4n');
    this.sequence.loop = false;
  }

  private update(time: number, type: GbNoiseType) {
    if (!type) return;

    if (this.isMuted) return;

    Tone.Draw.schedule(() => {
      noiseEventEmitter.emit(type);
    }, time);

    switch (type) {
      case 'kick':
        this.kick.triggerAttackRelease('8n', time);
        break;
      case 'snare':
        this.snare.triggerAttackRelease('8n', time);
        break;
      case 'hihat':
        this.hihat.triggerAttackRelease('8n', time);
        break;
      case 'crash':
        this.crash.triggerAttackRelease('8n', time);
        break;
    }
  }

  public start(time?: TransportTime, offset?: number) {
    this.sequence.start(time, offset);
  }

  public stop(time?: TransportTime) {
    this.sequence.stop(time);
  }

  public mute(muted: boolean) {
    this.isMuted = muted;
  }
}
