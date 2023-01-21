import * as Tone from 'tone';
import { keyState } from './keyState';

type BgNote = {
  note: string;
  dur: string;
} | null;

export type GbChannelData = Required<
  Required<ConstructorParameters<typeof Tone.Sequence<BgNote>>>[0]['events']
>;

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
  private sequence: Tone.Sequence<BgNote>;

  constructor(data: GbChannelData) {
    this.sequence = new Tone.Sequence(this.update.bind(this), data, '4n').start(
      '1m',
    );
    this.sequence.loop = false;
  }

  private update(time: number, value: BgNote) {
    if (!value) return;

    const { note, dur } = value;
    this.synth.triggerAttackRelease(note, dur, time);
    Tone.Draw.schedule(() => {
      keyState.activate(note);
    }, time);
    Tone.Draw.schedule(() => {
      keyState.deactivate(note);
    }, time + Tone.Time(dur).toSeconds());
  }
}
