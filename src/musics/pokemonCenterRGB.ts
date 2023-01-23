import { GbChannel } from '../GbChannel';
import { GbNoise } from '../GbNoise';
import { MusicBase } from './Music';

const ch1 = new GbChannel(
  [
    // 1
    [
      { note: 'D5', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'D5', dur: '8n' },
      { note: 'A5', dur: '4n' },
    ],
    [null, { note: 'G5', dur: '4n' }],
    [null, { note: 'F#5', dur: '8n' }],

    // 2
    [
      { note: 'E5', dur: '8n' },
      { note: 'C#5', dur: '4n' },
    ],
    null,
    { note: 'A4', dur: '2n' },
    null,

    // 3
    [
      { note: 'C#5', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'C#5', dur: '8n' },
      { note: 'F#5', dur: '4n' },
    ],
    [null, { note: 'E5', dur: '4n' }],
    [null, { note: 'C#5', dur: '8n' }],

    // 4
    [
      { note: 'D5', dur: '8n' },
      { note: 'F#5', dur: '4n' },
    ],
    null,
    { note: 'A4', dur: '2n' },
    { note: 'G4', dur: '2n' },

    // 5
    [
      { note: 'D5', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'D5', dur: '8n' },
      { note: 'A5', dur: '4n' },
    ],
    [null, { note: 'G5', dur: '4n' }],
    [null, { note: 'F#5', dur: '8n' }],

    // 6
    [
      { note: 'E5', dur: '8n' },
      { note: 'C#5', dur: '4n' },
    ],
    null,
    { note: 'A4', dur: '2n' },
    null,

    // 7
    [
      { note: 'C#5', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'C#5', dur: '8n' },
      { note: 'F#5', dur: '4n' },
    ],
    [null, { note: 'E5', dur: '4n' }],
    [null, { note: 'C#5', dur: '8n' }],

    // 8
    { note: 'D5', dur: '2n' },
    null,
    { note: 'D4', dur: '4n' },
    { note: 'E4', dur: '4n' },

    // 9
    { note: 'F#5', dur: '2n' },
    null,
    { note: 'A5', dur: '2n' },
    null,

    // 10
    [
      { note: 'G5', dur: '8n' },
      { note: 'A5', dur: '8n' },
    ],
    [
      { note: 'G5', dur: '8n' },
      { note: 'F#5', dur: '8n' },
    ],
    { note: 'E5', dur: '2n' },
    null,

    // 11
    { note: 'C#5', dur: '2n' },
    null,
    { note: 'E5', dur: '2n' },
    null,

    // 12
    [
      { note: 'F#5', dur: '8n' },
      { note: 'G5', dur: '8n' },
    ],
    [
      { note: 'F#5', dur: '8n' },
      { note: 'E5', dur: '8n' },
    ],
    { note: 'D5', dur: '2n' },
    null,
    // 13
    { note: 'F#5', dur: '2n' },
    null,
    { note: 'A5', dur: '2n' },
    null,

    // 14
    [
      { note: 'G5', dur: '8n' },
      { note: 'F#5', dur: '8n' },
    ],
    [
      { note: 'G5', dur: '8n' },
      { note: 'A5', dur: '8n' },
    ],
    { note: 'B5', dur: '2n' },
    null,

    // 15
    { note: 'A5', dur: '4n' },
    [
      { note: 'G5', dur: '8n' },
      { note: 'F#5', dur: '8n' },
    ],
    { note: 'G5', dur: '2n' },
    null,

    // 16
    [
      { note: 'F#5', dur: '8n' },
      { note: 'G5', dur: '8n' },
    ],
    [
      { note: 'F#5', dur: '8n' },
      { note: 'E5', dur: '8n' },
    ],
    { note: 'D5', dur: '2n' },
    null,
  ],
  {
    envelope: {
      attack: 0.01,
      decay: 0.4,
      sustain: 0.5,
      release: 0.6,
    },
  },
);

const ch2 = new GbChannel(
  [
    // 1
    [
      { note: 'F#4', dur: '8n' },
      { note: 'E4', dur: '8n' },
    ],
    [
      { note: 'F#4', dur: '8n' },
      { note: 'D5', dur: '4n' },
    ],
    [null, { note: 'C#5', dur: '8n' }],
    [
      { note: 'B4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],

    // 2
    [
      { note: 'B4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'G4', dur: '8n' },
      { note: 'F#4', dur: '8n' },
    ],
    [
      { note: 'E4', dur: '8n' },
      { note: 'F#4', dur: '8n' },
    ],
    [
      { note: 'G4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],

    // 3
    [
      { note: 'A4', dur: '8n' },
      { note: 'E4', dur: '8n' },
    ],
    [
      { note: 'A4', dur: '8n' },
      { note: 'C#5', dur: '4n' },
    ],
    [null, { note: 'B4', dur: '8n' }],
    [
      { note: 'A4', dur: '8n' },
      { note: 'G4', dur: '8n' },
    ],

    // 4
    [
      { note: 'F#4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'B4', dur: '8n' },
      { note: 'C#5', dur: '8n' },
    ],
    [
      { note: 'D5', dur: '8n' },
      { note: 'C#5', dur: '8n' },
    ],
    [
      { note: 'B4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],

    // 5
    [
      { note: 'F#4', dur: '8n' },
      { note: 'E4', dur: '8n' },
    ],
    [
      { note: 'F#4', dur: '8n' },
      { note: 'D5', dur: '4n' },
    ],
    [null, { note: 'C#5', dur: '8n' }],
    [
      { note: 'B4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],

    // 6
    [
      { note: 'B4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'G4', dur: '8n' },
      { note: 'F#4', dur: '8n' },
    ],
    [
      { note: 'E4', dur: '8n' },
      { note: 'F#4', dur: '8n' },
    ],
    [
      { note: 'G4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],

    // 7
    [
      { note: 'A4', dur: '8n' },
      { note: 'E4', dur: '8n' },
    ],
    [
      { note: 'A4', dur: '8n' },
      { note: 'C#5', dur: '4n' },
    ],
    [null, { note: 'B4', dur: '8n' }],
    [
      { note: 'A4', dur: '8n' },
      { note: 'G4', dur: '8n' },
    ],

    // 8
    [
      { note: 'F#4', dur: '8n' },
      { note: 'E4', dur: '8n' },
    ],
    [
      { note: 'D4', dur: '8n' },
      { note: 'E4', dur: '8n' },
    ],
    [
      { note: 'F#4', dur: '8n' },
      { note: 'G4', dur: '8n' },
    ],
    [
      { note: 'A4', dur: '8n' },
      { note: 'B4', dur: '8n' },
    ],

    // 9
    [
      { note: 'F#4', dur: '8n' },
      { note: 'E4', dur: '8n' },
    ],
    { note: 'D4', dur: '4n' },
    [
      { note: 'E4', dur: '8n' },
      { note: 'F#4', dur: '8n' },
    ],
    [
      { note: 'G4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],

    // 10
    [
      { note: 'B4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    { note: 'G4', dur: '4n' },
    [
      { note: 'E4', dur: '8n' },
      { note: 'F#4', dur: '8n' },
    ],
    [
      { note: 'G4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],

    // 11
    [
      { note: 'G4', dur: '8n' },
      { note: 'F#4', dur: '8n' },
    ],
    { note: 'E4', dur: '4n' },
    [
      { note: 'C#4', dur: '8n' },
      { note: 'D4', dur: '8n' },
    ],
    [
      { note: 'E4', dur: '8n' },
      { note: 'G4', dur: '8n' },
    ],

    // 12
    [
      { note: 'A4', dur: '8n' },
      { note: 'G4', dur: '8n' },
    ],
    [
      { note: 'A4', dur: '8n' },
      { note: 'B4', dur: '8n' },
    ],
    { note: 'A4', dur: '2n' },
    null,
    // 13
    [
      { note: 'D5', dur: '8n' },
      { note: 'C#5', dur: '8n' },
    ],
    { note: 'B4', dur: '4n' },
    [
      { note: 'A4', dur: '8n' },
      { note: 'B4', dur: '8n' },
    ],
    [
      { note: 'C#5', dur: '8n' },
      { note: 'D5', dur: '8n' },
    ],

    // 14
    [
      { note: 'E5', dur: '8n' },
      { note: 'D5', dur: '8n' },
    ],
    { note: 'C#5', dur: '4n' },
    [
      { note: 'B4', dur: '8n' },
      { note: 'C#5', dur: '8n' },
    ],
    [
      { note: 'D5', dur: '8n' },
      { note: 'E5', dur: '8n' },
    ],

    // 15
    [
      { note: 'C#5', dur: '8n' },
      { note: 'B4', dur: '8n' },
    ],
    { note: 'A4', dur: '4n' },
    [
      { note: 'G4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'B4', dur: '8n' },
      { note: 'F#4', dur: '8n' },
    ],

    // 16
    [
      { note: 'A4', dur: '8n' },
      { note: 'G4', dur: '8n' },
    ],
    [
      { note: 'F#4', dur: '8n' },
      { note: 'E4', dur: '8n' },
    ],
    [
      { note: 'D4', dur: '8n' },
      { note: 'E4', dur: '8n' },
    ],
    [
      { note: 'F#4', dur: '8n' },
      { note: 'G4', dur: '8n' },
    ],
  ],
  {
    envelope: {
      attack: 0.01,
      decay: 0.4,
      sustain: 0.5,
      release: 0.6,
    },
  },
);

const ch3 = new GbChannel(
  [
    // 1
    [
      { note: 'D4', dur: '8n' },
      { note: 'F#4', dur: '8n' },
    ],
    [
      { note: 'D4', dur: '8n' },
      { note: 'F#4', dur: '8n' },
    ],
    [
      { note: 'D4', dur: '8n' },
      { note: 'F#4', dur: '8n' },
    ],
    [
      { note: 'G4', dur: '8n' },
      { note: 'F#4', dur: '8n' },
    ],

    // 2
    [
      { note: 'E4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'E4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'E4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'E4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],

    // 3
    [
      { note: 'E4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'E4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'E4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'B4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],

    // 4
    [
      { note: 'F#4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'F#4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'F#4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'E4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],

    // 5
    [
      { note: 'D4', dur: '8n' },
      { note: 'F#4', dur: '8n' },
    ],
    [
      { note: 'D4', dur: '8n' },
      { note: 'F#4', dur: '8n' },
    ],
    [
      { note: 'D4', dur: '8n' },
      { note: 'F#4', dur: '8n' },
    ],
    [
      { note: 'G4', dur: '8n' },
      { note: 'F#4', dur: '8n' },
    ],

    // 6
    [
      { note: 'E4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'E4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'E4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'E4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],

    // 7
    [
      { note: 'E4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'E4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'E4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'B4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],

    // 8
    [
      { note: 'D4', dur: '8n' },
      { note: 'E4', dur: '8n' },
    ],
    [
      { note: 'D4', dur: '8n' },
      { note: 'E4', dur: '8n' },
    ],
    [
      { note: 'D4', dur: '8n' },
      { note: 'B4', dur: '8n' },
    ],
    [
      { note: 'A4', dur: '8n' },
      { note: 'G4', dur: '8n' },
    ],

    // 9
    [
      { note: 'F#4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'F#4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'F#4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'F#4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],

    // 10
    [
      { note: 'E4', dur: '8n' },
      { note: 'B4', dur: '8n' },
    ],
    [
      { note: 'E4', dur: '8n' },
      { note: 'B4', dur: '8n' },
    ],
    [
      { note: 'E4', dur: '8n' },
      { note: 'B4', dur: '8n' },
    ],
    [
      { note: 'E4', dur: '8n' },
      { note: 'B4', dur: '8n' },
    ],

    // 11
    [
      { note: 'E4', dur: '8n' },
      { note: 'G4', dur: '8n' },
    ],
    [
      { note: 'E4', dur: '8n' },
      { note: 'G4', dur: '8n' },
    ],
    [
      { note: 'E4', dur: '8n' },
      { note: 'G4', dur: '8n' },
    ],
    [
      { note: 'E4', dur: '8n' },
      { note: 'G4', dur: '8n' },
    ],

    // 12
    [
      { note: 'F#4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'F#4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'F#4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'G#4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],

    // 13
    [
      { note: 'F#4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'F#4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'F#4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'F#4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],

    // 14
    [
      { note: 'G4', dur: '8n' },
      { note: 'B4', dur: '8n' },
    ],
    [
      { note: 'G4', dur: '8n' },
      { note: 'B4', dur: '8n' },
    ],
    [
      { note: 'G4', dur: '8n' },
      { note: 'B4', dur: '8n' },
    ],
    [
      { note: 'G4', dur: '8n' },
      { note: 'B4', dur: '8n' },
    ],

    // 15
    [
      { note: 'E4', dur: '8n' },
      { note: 'G4', dur: '8n' },
    ],
    [
      { note: 'E4', dur: '8n' },
      { note: 'G4', dur: '8n' },
    ],
    [
      { note: 'E4', dur: '8n' },
      { note: 'G4', dur: '8n' },
    ],
    [
      { note: 'E4', dur: '8n' },
      { note: 'G4', dur: '8n' },
    ],

    // 16
    [
      { note: 'F#4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'F#4', dur: '8n' },
      { note: 'A4', dur: '8n' },
    ],
    [
      { note: 'F#4', dur: '8n' },
      { note: 'G4', dur: '8n' },
    ],
    [
      { note: 'F#4', dur: '8n' },
      { note: 'E4', dur: '8n' },
    ],
  ],
  {
    envelope: {
      sustain: 1,
      attack: 0,
      decay: 0,
      release: 0,
    },
    volume: -23,
  },
);

const noise = new GbNoise([]);

class PokemonCenterRGB extends MusicBase {
  protected ch1 = ch1;
  protected ch2 = ch2;
  protected ch3 = ch3;
  protected noise = noise;
  public bpm = 133.5;
  protected loopPoints = ['0m', '16m'] as const;
  protected timeSignature = 4;
  protected startPositions = [0, 0, 0, 0] as const;
}

export const pokemonCenterRGB = new PokemonCenterRGB();
