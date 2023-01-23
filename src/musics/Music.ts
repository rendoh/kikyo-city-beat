import * as Tone from 'tone';
import { TimeSignature, TransportTime } from 'tone/build/esm/core/type/Units';
import { GbChannel } from '../GbChannel';
import { GbNoise } from '../GbNoise';

interface Music {
  start(): void;
  stop(): void;
  mute(ch: 'ch1' | 'ch2' | 'ch3' | 'noise', muted: boolean): void;
}

export abstract class MusicBase implements Music {
  protected ch1?: GbChannel;
  protected ch2?: GbChannel;
  protected ch3?: GbChannel;
  protected noise?: GbNoise;
  protected abstract loopPoints: Readonly<[TransportTime, TransportTime]>;
  protected abstract timeSignature: TimeSignature;
  protected abstract startPositions: Readonly<
    Partial<[TransportTime, TransportTime, TransportTime, TransportTime]>
  >;
  public abstract bpm: number;

  public start() {
    const [startPosition, endPosition] = this.loopPoints;
    Tone.Transport.bpm.value = this.bpm;
    Tone.Transport.timeSignature = this.timeSignature;
    Tone.Transport.setLoopPoints(startPosition, endPosition);
    console.log(Tone.Transport.timeSignature);
    this.ch1?.start(this.startPositions[0]);
    this.ch2?.start(this.startPositions[1]);
    this.ch3?.start(this.startPositions[2]);
    this.noise?.start(this.startPositions[3]);
  }

  public stop() {
    this.ch1?.stop();
    this.ch2?.stop();
    this.ch3?.stop();
    this.noise?.stop();
  }

  public mute(ch: 'ch1' | 'ch2' | 'ch3' | 'noise', muted: boolean) {
    this[ch]?.mute(muted);
  }
}
