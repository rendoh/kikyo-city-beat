import * as Tone from 'tone';
import { TransportTime } from 'tone/build/esm/core/type/Units';
import { keyState } from './keyState';

type GbNote = {
  note: string;
  dur: string;
} | null;

export type GbChannelData = Required<
  ConstructorParameters<typeof Tone.Sequence<GbNote>>
>[0]['events'];

const filter = new Tone.AutoFilter({
  frequency: 6.2,
  depth: 0.4,
})
  .toDestination()
  .start();

export class GbChannel {
  private synth = new Tone.Synth({
    volume: -18,
    oscillator: {
      type: 'square',
    },
    envelope: {
      sustain: 1,
      attack: 0,
      decay: 0,
      release: 0,
    },
  })
    .connect(filter)
    .toDestination();
  private sequence: Tone.Sequence<GbNote>;

  constructor(data: GbChannelData) {
    this.sequence = new Tone.Sequence(this.update.bind(this), data, '4n');
    this.sequence.loop = false;
  }

  private update(time: number, value: GbNote) {
    if (!value) return;

    const { note, dur } = value;
    this.synth.triggerAttackRelease(note, dur, time);
    Tone.Draw.schedule(() => {
      if (!this.synth.oscillator.mute) {
        keyState.activate(note);
      }
    }, time);
    Tone.Draw.schedule(() => {
      keyState.deactivate(note);
    }, time + Tone.Time(dur).toSeconds());
  }

  public start(time?: TransportTime, offset?: number) {
    this.sequence.start(time, offset);
  }

  public stop(time?: TransportTime) {
    this.sequence.stop(time);
  }

  public mute(muted: boolean) {
    this.synth.oscillator.mute = muted;
  }
}
