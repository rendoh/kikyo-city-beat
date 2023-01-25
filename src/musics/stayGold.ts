import { $, GbChannel } from '../GbChannel';
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
  null,
  null,
  // 14
  [$('D4', '8n'), $('D4', '4n')],
  [null, $('D4', '4n')],
  [null, $('A3', '4n')],
  [null, $('A3', '4n')],
  // 15
  [null, $('D4', '4n')],
  [null, $('D4', '8n')],
  $('E4', '4n'),
  [null, $('D4', '8n')],
  // 16
  [$('D4', '8n'), $('D4', '4n')],
  [null, $('D4', '4n')],
  [null, $('F#4', '4n')],
  [null, $('G4', '4n')],
  // 17
  [null, $('F#4', '4n')],
  [null, $('E4', '4n')],
  null,
  null,
  // 18
  [$('B3', '8n'), $('B3', '4n')],
  [null, $('D4', '4n')],
  [null, $('D4', '4n')],
  [null, $('D4', '8n')],
  // 19
  $('E4', '4n'),
  null,
  null,
  null,
  // 20
  $('C#4', '4n'),
  $('C#4', '4n'),
  $('F#4', '4n'),
  [$('F#4', '8n'), $('F#4', '4n')],
  // 21
  [null, $('E4', '4n')],
  [null, $('D4', '4n')],
  null,
  null,
  // 22
  [$('D4', '8n'), $('D4', '4n')],
  [null, $('D4', '4n')],
  [null, $('F#4', '4n')],
  [null, $('G4', '4n')],
  // 23
  [null, $('F#4', '4n')],
  [null, $('E4', '2n')],
  null,
  null,
  // 24
  null,
  [null, $('F#4', '4n')],
  [null, $('E4', '8n')],
  $('D4', '4n'),
  // 25
  $('D4', '4n.'),
  [null, $('E4', '4n.')],
  null,
  [$('F#4', '8n'), $('E4', '8n')],
  // 26
  $('F#4', '4n.'),
  null,
  $('E4', '4n'),
  $('F#4', '4n'),
  // 27
  $('G4', '4n'),
  [$('D4', '8n'), $('C#4', '4n')],
  [null, $('E4', '4n')],
  [null, $('E4', '8n')],
  // 28
  $('F#4', '2n'),
  null,
  null,
  null,
  // 29
  $('D4', '4n.'),
  [null, $('E4', '4n.')],
  null,
  [$('F#4', '8n'), $('E4', '8n')],
  // 30
  $('F#4', '4n.'),
  null,
  $('E4', '4n'),
  $('F#4', '4n'),
  // 31
  [$('G4', '8n'), $('D4', '4n')],
  [null, $('C#4', '4n')],
  [null, $('E4', '4n')],
  null,
  // 32
  $('D#4', '2n.'),
  null,
  null,
  null,
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
  // 8
  null,
  null,
  null,
  null,
  // 9
  null,
  null,
  null,
  null,
  // 10
  null,
  null,
  null,
  null,
  // 11
  null,
  null,
  null,
  null,
  // 12
  null,
  null,
  null,
  null,
  // 13
  null,
  null,
  null,
  null,
  // 14
  null,
  null,
  null,
  null,
  // 15
  null,
  null,
  null,
  null,
  // 16
  $('F#4', '1m'),
  null,
  null,
  null,
  // 17
  null,
  null,
  null,
  null,
  // 18
  $('G4', '4n'),
  null,
  null,
  null,
  // 19
  null,
  null,
  null,
  null,
  // 20
  null,
  null,
  null,
  null,
  // 21
  null,
  null,
  null,
  null,
  // 22
  null,
  null,
  null,
  null,
  // 23
  null,
  null,
  null,
  null,
  // 24
  null,
  null,
  null,
  null,
  // 25
  $('B3', '4n.'),
  [null, $('C#4', '4n.')],
  null,
  [$('E4', '8n'), $('C#4', '8n')],
  // 26
  $('D4', '4n.'),
  null,
  null,
  null,
  // 27
  null,
  null,
  null,
  null,
  // 28
  null,
  null,
  null,
  null,
  // 29
  $('B3', '4n.'),
  [null, $('C#4', '4n.')],
  null,
  [$('E4', '8n'), $('C#4', '8n')],
  // 30
  $('D4', '4n.'),
  null,
  null,
  null,
  // 31
  null,
  null,
  null,
  null,
  // 32
  $('F#4', '2n.'),
  null,
  null,
  null,
]);

const ch3 = new GbChannel([
  // 1
  $('G2', '4n'),
  null,
  null,
  null,
  // 2
  null,
  null,
  null,
  null,
  // 3
  null,
  null,
  null,
  null,
  // 4
  null,
  [$('A2', '8n'), $('D3', '4n')],
  [null, $('D3', '8n')],
  [$('D3', '8n'), $('D3', '8n')],
  // 5
  $('G2', '4n'),
  null,
  null,
  null,
  // 6
  null,
  null,
  null,
  null,
  // 7
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
  // 12
  [$('F#2', '8n'), $('F#2', '4n')],
  [null, $('F#2', '8n')],
  [$('F#2', '8n'), $('F#2', '4n')],
  [null, $('F#2', '8n')],
  // 13
  [$('B2', '8n'), $('B2', '4n')],
  [null, $('B2', '8n')],
  [$('A2', '8n'), $('A2', '4n')],
  [null, $('A2', '8n')],
  // 14
  [$('G2', '8n'), $('G2', '4n')],
  [null, $('G2', '8n')],
  [$('G2', '8n'), $('G2', '4n')],
  [null, $('G2', '8n')],
  // 15
  [$('A2', '8n'), $('A2', '4n')],
  [null, $('A2', '8n')],
  [$('A2', '8n'), $('C#3', '4n')],
  $('E3', '4n'),
  // 16
  [$('D3', '8n'), $('D3', '4n')],
  [null, $('D3', '8n')],
  [$('D3', '8n'), $('D3', '4n')],
  [null, $('D3', '8n')],
  // 17
  [$('G3', '8n'), $('G3', '4n')],
  [null, $('G3', '8n')],
  [$('F#3', '8n'), $('F#3', '4n')],
  [null, $('F#3', '8n')],
  // 18
  [$('E3', '8n'), $('E3', '4n')],
  [null, $('E3', '8n')],
  [$('E3', '8n'), $('E3', '4n')],
  [null, $('E3', '8n')],
  // 19
  [$('A3', '8n'), $('A3', '4n')],
  [null, $('A3', '8n')],
  [$('G3', '8n'), $('G3', '4n')],
  [null, $('G3', '8n')],
  // 20
  [$('F#3', '8n'), $('F#3', '4n')],
  [null, $('F#3', '8n')],
  [$('F#3', '8n'), $('F#3', '4n')],
  [null, $('F#3', '8n')],
  // 21
  [$('B2', '8n'), $('B2', '4n')],
  [null, $('B2', '8n')],
  [$('A2', '8n'), $('A2', '4n')],
  [null, $('A2', '8n')],
  // 22
  [$('G2', '8n'), $('G2', '4n')],
  [null, $('G2', '8n')],
  [$('G2', '8n'), $('G2', '4n')],
  [null, $('G2', '8n')],
  // 23
  [$('A2', '8n'), $('A2', '4n')],
  [null, $('A2', '8n')],
  [$('A2', '8n'), $('A2', '8n')],
  [$('A2', '8n'), $('A2', '8n')],
  // 24
  [$('A2', '8n'), $('A2', '8n')],
  [$('A2', '8n'), $('C#3', '8n')],
  [$('D3', '8n'), $('C#3', '8n')],
  $('A2', '4n'),
  // 25
  $('G2', '4n'),
  [$('G2', '8n'), $('F#2', '4n')],
  [null, $('F#2', '8n')],
  [$('F#2', '8n'), $('B2', '4n')],
  // 26
  [null, $('B2', '8n')],
  [$('B2', '4n'), $('A2', '4n')],
  [null, $('A2', '8n')],
  [$('A2', '8n'), $('A2', '8n')],
  // 27
  $('G2', '4n'),
  [$('G2', '8n'), $('A2', '4n')],
  [null, $('A2', '8n')],
  [$('A2', '8n'), $('D3', '4n')],
  // 28
  [null, $('D3', '8n')],
  [$('D3', '8n'), $('F#3', '8n')],
  [$('G3', '8n'), $('F#3', '8n')],
  $('D3', '4n'),
  // 29
  $('G2', '4n'),
  [$('G2', '8n'), $('F#2', '4n')],
  [null, $('F#2', '8n')],
  [$('F#2', '8n'), $('B2', '4n')],
  // 30
  [null, $('B2', '8n')],
  [$('B2', '4n'), $('A2', '4n')],
  [null, $('A2', '8n')],
  [$('A2', '8n'), $('A2', '8n')],
  // 31
  [$('G2', '8n'), $('G2', '8n')],
  [$('G2', '8n'), $('A2', '8n')],
  [null, $('A2', '8n')],
  [$('A2', '8n'), null],
  // 32
  $('B2', '2n.'),
  null,
  null,
  null,
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
  ['kick', 'snare'],
  ['hihat', 'snare'],
  ['kick', null, null, 'snare', 'kick', null],
  [null, null, 'kick', 'snare', null, null],

  ['kick', 'snare'],
  ['hihat', 'snare'],
  ['kick', null, null, 'snare', 'kick', null],
  [null, null, 'kick', 'snare', null, null],

  ['kick', 'snare'],
  ['hihat', 'snare'],
  ['kick', null, null, 'snare', 'kick', null],
  [null, null, 'kick', 'snare', null, null],

  ['kick', 'snare'],
  ['hihat', 'snare'],
  ['kick', null, null, 'snare', 'kick', null],
  [null, null, 'kick', 'snare', null, null],

  ['kick', 'snare'],
  ['hihat', 'snare'],
  ['kick', null, null, 'snare', 'kick', null],
  [null, null, 'kick', 'snare', null, null],

  ['kick', 'snare'],
  ['hihat', 'snare'],
  ['kick', null, null, 'snare', 'kick', null],
  [null, null, 'kick', 'snare', null, null],

  ['kick', 'snare'],
  ['hihat', 'snare'],
  ['kick', null, null, 'snare', 'kick', null],
  [null, null, 'kick', 'snare', null, null],

  ['kick', 'snare'],
  ['hihat', 'snare'],
  ['kick', ['snare', 'snare']],
  ['snare', 'snare', 'snare', 'snare'],
  //
  ['hihat', 'snare'],
  [null, 'snare'],
  ['kick', 'snare'],
  ['hihat', 'snare'],
  //
  ['kick', 'snare'],
  [['kick', 'kick'], 'snare'],
  ['kick', 'snare'],
  [['kick', 'kick'], 'snare'],
  //
  ['kick', 'snare'],
  [['kick', 'kick'], 'snare'],
  ['kick', 'snare'],
  ['hihat', 'snare'],
  //
  ['kick', 'snare'],
  [['kick', 'kick'], 'snare'],
  ['kick', 'snare'],
  [['kick', 'kick'], 'snare'],
  //
  ['kick', 'snare'],
  [['kick', 'kick'], 'snare'],
  ['kick', 'snare'],
  ['hihat', 'snare'],
  //
  ['kick', 'snare'],
  [['kick', 'kick'], 'snare'],
  ['kick', 'snare'],
  [['kick', 'kick'], 'snare'],
  //
  ['kick', 'snare'],
  ['hihat', 'snare'],
  ['kick', 'snare'],
  ['hihat', 'snare'],
  //
  ['kick', 'snare'],
  ['hihat', 'kick'],
  ['hihat', 'snare'],
  [['kick', 'kick'], 'snare'],
  //
  ['kick', 'snare', 'snare', 'snare'],
  ['kick', 'snare'],
  ['kick', 'snare', 'snare', 'snare'],
  ['kick', 'snare'],

  //
  ['crash', null],
  ['snare', 'kick'],
  ['snare', 'kick'],
  ['snare', 'kick'],
  //
  ['snare', null],
  ['snare', 'kick'],
  ['snare', ['kick', 'kick']],
  ['snare', 'kick'],
  //
  ['snare', null],
  ['snare', 'kick'],
  ['snare', 'kick'],
  ['snare', ['kick', 'kick']],
  //
  ['snare', 'kick'],
  ['snare', ['kick', 'kick']],
  ['snare', 'kick'],
  ['snare', 'kick'],
  //
  ['crash', null],
  ['snare', 'kick'],
  ['snare', 'kick'],
  ['snare', ['kick', 'kick']],
  //
  ['snare', null],
  ['snare', 'kick'],
  ['snare', 'kick'],
  ['snare', ['kick', 'kick']],
  //
  ['kick', null],
  ['snare', 'snare'],
  [null, 'kick'],
  ['kick', null],
  //
  'crash',
  null,
  null,
  null,
]);

class StayGold extends MusicBase {
  protected ch1 = ch1;
  protected ch2 = ch2;
  protected ch3 = ch3;
  protected noise = noise;
  public bpm = 202;
  protected loopPoints = ['7m', '32m'] as const;
  protected timeSignature = 4;
  protected startPositions = [0, 0, 0, 0] as const;
}

export const stayGold = new StayGold();
