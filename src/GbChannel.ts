import * as Tone from 'tone';
import { SynthOptions } from 'tone';
import { Note, Time, TransportTime } from 'tone/build/esm/core/type/Units';
import { RecursivePartial } from 'tone/build/esm/core/util/Interface';
import { keyState } from './keyState';

type GbNote = {
  note: Note;
  dur: Time | (() => Time);
} | null;

export function $(note: Note, dur: NonNullable<GbNote>['dur']): GbNote {
  return { note, dur };
}

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
  private synth: Tone.Synth;
  private sequence: Tone.Sequence<GbNote>;

  constructor(
    data: GbChannelData,
    {
      volume = -18,
      envelope = {
        attack: 0,
        decay: 0,
        sustain: 1,
        release: 0,
      },
    }: RecursivePartial<SynthOptions> = {},
  ) {
    this.synth = new Tone.Synth({
      volume,
      oscillator: {
        type: 'square',
      },
      envelope,
    })
      .connect(filter)
      .toDestination();

    this.sequence = new Tone.Sequence(this.update.bind(this), data, '4n');
    this.sequence.loop = false;
  }

  private update(time: number, value: GbNote) {
    if (!value) return;

    const { note, dur } = value;
    const duration = typeof dur === 'function' ? dur() : dur;

    this.synth.triggerAttackRelease(note, duration, time);
    Tone.Draw.schedule(() => {
      if (!this.synth.oscillator.mute) {
        keyState.activate(note);
      }
    }, time);
    Tone.Draw.schedule(() => {
      keyState.deactivate(note);
    }, time + Tone.Time(duration).toSeconds() - 0.02);
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
