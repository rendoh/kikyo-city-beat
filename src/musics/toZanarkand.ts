import { $, GbChannel } from '../GbChannel';
import { MusicBase } from './Music';

// WIP
// 3/4拍子試したかっただけ

const ch1 = new GbChannel([
  // 1
  [$('E5', '8n'), $('E4', '8n')],
  [$('G4', '8n'), $('B4', '8n')],
  [$('E5', '8n'), $('F#5', '8n')],

  // 2
  $('G5', '2n'),
  null,
  null,

  // 3
  [$('D5', '8n'), $('D4', '8n')],
  [$('F#4', '8n'), $('A4', '8n')],
  [$('D5', '8n'), $('E5', '8n')],

  // 4
  $('F#5', '2n'),
  null,
  null,

  // 5
  $('B4', '4n'),
  $('B4', '4n'),
  $('B4', '4n'),

  // 6
  $('B4', '4n'),
  $('A4', '2.666n'),
  [null, $('D5', '8n')],
]);

const ch2 = new GbChannel([
  // 1
  null,
  null,
  [null, $('D5', '8n')],

  // 2
  $('C5', '2n'),
  null,
  null,

  // 3
  null,
  null,
  [null, $('C5', '8n')],

  // 4
  $('B4', '2n'),
  null,
  null,

  // 5
  null,
  null,
  null,

  // 6
  $('C4', '4n'),
  null,
  null,
]);

const ch3 = new GbChannel([
  // 1
  $('E3', '2n'),
  null,
  $('D3', '4n'),

  // 2
  $('C3', '2n'),
  null,
  null,

  // 3
  $('D3', '2n'),
  null,
  $('C3', '4n'),

  // 4
  $('B2', '2n'),
  null,
  null,

  // 5
  [$('C3', '8n'), $('G3', '8n')],
  [$('D4', '8n'), $('C4', '8n')],
  [$('E4', '8n'), $('F#4', '8n')],

  // 6
  $('G4', '4n'),
  null,
  null,
]);

class ToZanarkand extends MusicBase {
  protected ch1 = ch1;
  protected ch2 = ch2;
  protected ch3 = ch3;
  // public bpm = 91;
  public bpm = 101;
  protected loopPoints = ['0m', '8m'] as const;
  protected timeSignature = [3, 4];
  protected startPositions = [0, 0, 0, 0] as const;
}

export const toZanarkand = new ToZanarkand();
