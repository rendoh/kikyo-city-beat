import { GbChannel } from '../GbChannel';
import { GbNoise } from '../GbNoise';

interface Music {
  start(): void;
  stop(): void;
  mute(ch: 'ch1' | 'ch2' | 'ch3' | 'noise', muted: boolean): void;
}

export abstract class MusicBase implements Music {
  protected abstract ch1: GbChannel;
  protected abstract ch2: GbChannel;
  protected abstract ch3: GbChannel;
  protected abstract noise: GbNoise;
  public abstract bpm: number;

  public abstract start(): void;

  public stop() {
    this.ch1.stop();
    this.ch2.stop();
    this.ch3.stop();
    this.noise.stop();
  }

  public mute(ch: 'ch1' | 'ch2' | 'ch3' | 'noise', muted: boolean) {
    this[ch].mute(muted);
  }
}
