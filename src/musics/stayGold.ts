import { $, GbChannel } from '../GbChannel';
import { GbNoise } from '../GbNoise';
import { MusicBase } from './Music';

// WIP

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

  // 8
  [$('F#4', '8n'), $('E4', '4n')],
  [null, $('D4', '4n')],
  [null, $('A3', '4n')],
  [null, $('B3', '4n')],

  // 9
  [null, $('D4', '4n')],
  [null, $('D4', '4n')],
  null,
  null,

  // 10
  [$('G4', '8n'), $('F#4', '4n')],
  [null, $('E4', '4n')],
  [null, $('D4', '4n')],
  [null, $('D4', '8n')],

  // 11
  $('C#4', '4n'),
  null,
  null,
  null,

  // 12
  $('C#4', '4n'),
  $('C#4', '4n'),
  $('F#4', '4n'),
  [$('F#4', '8n'), $('F#4', '4n')],

  // 13
  [null, $('E4', '4n')],
  [null, $('D4', '4n')],
  // [null, $('A4', '4n')],
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

  // // 8
  // [$('A3', '8n'), $('A3', '4n')],
  // [null, $('A3', '8n')],
  // [$('A3', '8n'), $('A3', '4n')],
  // [null, $('A3', '8n')],

  // // 9
  // [$('D3', '8n'), $('D3', '4n')],
  // [null, $('D3', '8n')],
  // [$('D3', '8n'), $('D3', '4n')],
  // [null, $('D3', '8n')],

  // // 10
  // [$('B2', '8n'), $('B2', '4n')],
  // [null, $('B2', '8n')],
  // [$('B2', '8n'), $('B2', '4n')],
  // [null, $('B2', '8n')],

  // // 9
  // [$('E3', '8n'), $('E3', '4n')],
  // [null, $('E3', '8n')],
  // [$('D3', '8n'), $('D3', '4n')],
  // [null, $('D3', '8n')],
]);

const ch3 = new GbChannel([
  $('G2', '4n'),
  null,
  null,
  null,

  null,
  null,
  null,
  null,

  null,
  null,
  null,
  null,

  null,
  [$('A2', '8n'), $('D3', '4n')],
  [null, $('D3', '8n')],
  [$('D3', '8n'), $('D3', '8n')],

  $('G2', '4n'),
  null,
  null,
  null,

  null,
  null,
  null,
  null,

  [$('G2', '8n'), $('F#2', '8n')],
  [$('G2', '8n'), $('A2', '8n')],
  null,
  null,

  // 8
  [$('D3', '8n'), $('D3', '4n')],
  [null, $('D3', '8n')],
  [$('D3', '8n'), $('D3', '4n')],
  [null, $('D3', '8n')],

  // 9
  [$('G2', '8n'), $('G2', '4n')],
  [null, $('G2', '8n')],
  [$('F#2', '8n'), $('F#2', '4n')],
  [null, $('F#2', '8n')],

  // 10
  [$('E2', '8n'), $('E2', '4n')],
  [null, $('E2', '8n')],
  [$('E2', '8n'), $('E2', '4n')],
  [null, $('E2', '8n')],

  // 11
  [$('A2', '8n'), $('A2', '4n')],
  [null, $('A2', '8n')],
  [$('G2', '8n'), $('G2', '4n')],
  [null, $('G2', '8n')],
]);

const noise = new GbNoise([
  ['kick', null],
  ['snare', null],
  ['snare', 'kick'],
  ['snare', 'kick'],

  ['snare', null],
  ['snare', 'kick'],
  ['snare', ['kick', 'kick']],
  ['snare', 'kick'],

  ['snare', null],
  ['snare', null],
  ['snare', 'kick'],
  ['snare', 'kick'],

  ['crash', null],
  ['snare', 'kick'],
  ['snare', ['kick', 'kick']],
  ['snare', 'kick'],

  ['snare', null],
  ['snare', null],
  ['snare', 'kick'],
  ['snare', 'kick'],

  ['snare', null],
  ['snare', 'kick'],
  ['snare', ['kick', 'kick']],
  ['snare', 'kick'],

  ['kick', 'kick'],
  ['kick', 'kick'],
  null,
  null,

  // A

  ['hihat', 'snare'],
  ['hihat', 'snare'],
  ['kick', 'snare'],
  ['hihat', 'snare'],

  ['hihat', 'snare'],
  ['hihat', 'snare'],
  ['kick', 'snare'],
  ['hihat', 'snare'],

  ['hihat', 'snare'],
  ['hihat', 'snare'],
  ['kick', 'snare'],
  ['hihat', 'snare'],

  ['hihat', 'snare'],
  ['hihat', 'snare'],
  ['kick', 'snare'],
  ['hihat', 'snare'],

  ['hihat', 'snare'],
  ['hihat', 'snare'],
  ['kick', 'snare'],
  ['hihat', 'snare'],

  ['hihat', 'snare'],
  ['hihat', 'snare'],
  ['kick', 'snare'],
  ['hihat', 'snare'],

  ['hihat', 'snare'],
  ['hihat', 'snare'],
  ['kick', 'snare'],
  ['hihat', 'snare'],

  ['hihat', 'snare'],
  ['hihat', 'snare'],
  ['kick', ['kick', 'kick']],
  ['kick', 'kick', 'kick', 'kick'],
]);

class StayGold extends MusicBase {
  protected ch1 = ch1;
  protected ch2 = ch2;
  protected ch3 = ch3;
  protected noise = noise;
  public bpm = 202;
  protected loopPoints = ['0m', '19m'] as const;
  protected timeSignature = 4;
  protected startPositions = [0, 0, 0, 0] as const;
}

export const stayGold = new StayGold();
