import * as Tone from 'tone';
import { GbChannel } from '../GbChannel';
import { GbNoise } from '../GbNoise';
import { MusicBase } from './Music';

const ch1 = new GbChannel([
  [
    { note: 'B4', dur: '8n' },
    { note: 'A#4', dur: '8n' },
  ],
  [
    { note: 'B4', dur: '8n' },
    { note: 'C#5', dur: '8n' },
  ],
  [null, { note: 'A#4', dur: '8n' }],
  [null, { note: 'D5', dur: '4n' }],

  [null, { note: 'D5', dur: '8n' }],
  [null, { note: 'F#5', dur: '4n' }],
  [null, { note: 'E5', dur: '8n' }],
  [
    { note: 'D5', dur: '8n' },
    { note: 'C5', dur: '8n' },
  ],
]);

const ch2 = new GbChannel([
  [
    { note: 'G4', dur: '8n' },
    { note: 'F#4', dur: '8n' },
  ],
  [
    { note: 'G4', dur: '8n' },
    { note: 'F#4', dur: '8n' },
  ],
  [null, { note: 'F#4', dur: '8n' }],
  [null, { note: 'B4', dur: '4n' }],

  [null, { note: 'B4', dur: '8n' }],
  [null, { note: 'D5', dur: '4n' }],
  null,
  null,
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
    Tone.Transport.setLoopPoints(0, '2m');
    this.ch1.start(0);
    this.ch2.start(0);
    this.ch3.start(0);
    this.noise.start(0);
  }
}

export const stayGold = new StayGold();
