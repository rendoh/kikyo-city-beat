import * as Tone from 'tone';
import { GbChannel } from '../GbChannel';
import { GbNoise } from '../GbNoise';
import { MusicBase } from './Music';

const ch1 = new GbChannel([
  // 1
  [
    { note: 'B3', dur: '8n' },
    { note: 'A#3', dur: '8n' },
  ],
  [
    { note: 'B3', dur: '8n' },
    { note: 'C#4', dur: '8n' },
  ],
  [null, { note: 'A#3', dur: '8n' }],
  [null, { note: 'D4', dur: '4n' }],

  // 2
  [null, { note: 'D4', dur: '8n' }],
  [null, { note: 'F#4', dur: '4n' }],
  [null, { note: 'E4', dur: '8n' }],
  [
    { note: 'D4', dur: '8n' },
    { note: 'C4', dur: '8n' },
  ],

  // 3
  [
    { note: 'B3', dur: '8n' },
    { note: 'A#3', dur: '8n' },
  ],
  [
    { note: 'B3', dur: '8n' },
    { note: 'C#4', dur: '8n' },
  ],
  [null, { note: 'E4', dur: '8n' }],
  [null, { note: 'D4', dur: '4n' }],

  // 4
  [null, { note: 'D4', dur: '8n' }],
  [null, { note: 'G4', dur: '4n' }],
  [null, { note: 'F#4', dur: '4n' }],
  [
    { note: 'E4', dur: '4n' },
    { note: 'D4', dur: '4n' },
  ],

  // 5
  [
    { note: 'B3', dur: '8n' },
    { note: 'A#3', dur: '8n' },
  ],
  [
    { note: 'B3', dur: '8n' },
    { note: 'C#4', dur: '8n' },
  ],
  [null, { note: 'A#3', dur: '8n' }],
  [null, { note: 'D4', dur: '4n' }],

  // 6
  [null, { note: 'D4', dur: '8n' }],
  [null, { note: 'F#4', dur: '4n' }],
  [null, { note: 'E4', dur: '8n' }],
  [
    { note: 'D4', dur: '8n' },
    { note: 'C4', dur: '8n' },
  ],

  // 7
  [
    { note: 'B3', dur: '8n' },
    { note: 'A#3', dur: '8n' },
  ],
  [
    { note: 'B3', dur: '8n' },
    { note: 'C#4', dur: '4n' },
  ],
  [null, { note: 'D4', dur: '8n' }],
  [{ note: 'E4', dur: '8n' }, null],
]);

const ch2 = new GbChannel([
  // 1
  [
    { note: 'G3', dur: '8n' },
    { note: 'F#3', dur: '8n' },
  ],
  [
    { note: 'G3', dur: '8n' },
    { note: 'F#3', dur: '8n' },
  ],
  [null, { note: 'F#3', dur: '8n' }],
  [null, { note: 'B3', dur: '4n' }],

  // 2
  [null, { note: 'B3', dur: '8n' }],
  [null, { note: 'D4', dur: '4n' }],
  null,
  null,

  // 3
  [
    { note: 'G3', dur: '8n' },
    { note: 'F#3', dur: '8n' },
  ],
  [
    { note: 'G3', dur: '8n' },
    { note: 'A3', dur: '8n' },
  ],
  [null, { note: 'A3', dur: '8n' }],
  [null, { note: 'A3', dur: '4n' }],

  // 4
  [null, { note: 'A3', dur: '8n' }],
  [null, { note: 'D4', dur: '4n' }],
  null,
  null,

  // 5
  [
    { note: 'G3', dur: '8n' },
    { note: 'F#3', dur: '8n' },
  ],
  [
    { note: 'G3', dur: '8n' },
    { note: 'F#3', dur: '8n' },
  ],
  [null, { note: 'F#3', dur: '8n' }],
  [null, { note: 'B3', dur: '4n' }],

  // 6
  [null, { note: 'B3', dur: '8n' }],
  [null, { note: 'D4', dur: '4n' }],
  null,
  null,

  // 7
  [
    { note: 'G3', dur: '8n' },
    { note: 'F#3', dur: '8n' },
  ],
  [
    { note: 'G3', dur: '8n' },
    { note: 'A3', dur: '4n' },
  ],
  [null, { note: 'A3', dur: '8n' }],
  [{ note: 'A3', dur: '8n' }, null],
]);

const ch3 = new GbChannel([]);

const noise = new GbNoise([
  // // 1 --- intro
  // ['kick', 'snare'],
  // ['kick', 'kick', 'snare', null],
  // 'snare',
  // 'roll',
  // // 2 --- A
  // ...[...Array(3)].flatMap(() => noisePatternA),
  // // 5 ---
  // ['snare', null, 'kick', 'kick'],
  // ['snare', 'snare'],
  // null,
  // [null, 'kick'],
  // // 6 --- B
  // ...[...Array(16)].flatMap(() => noisePatternB),
]);

class StayGold extends MusicBase {
  protected ch1 = ch1;
  protected ch2 = ch2;
  protected ch3 = ch3;
  protected noise = noise;
  public bpm = 202;

  public start() {
    Tone.Transport.bpm.value = this.bpm;
    Tone.Transport.setLoopPoints('0m', '7m');
    this.ch1.start(0);
    this.ch2.start(0);
    this.ch3.start(0);
    this.noise.start(0);
  }
}

export const stayGold = new StayGold();
