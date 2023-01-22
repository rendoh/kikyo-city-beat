import * as Tone from 'tone';
import { canvas } from './Canvas';
import { kikyoCityBgm } from './musics/kikyoCityBgm';
import { pokemonCenterRGB } from './musics/pokemonCenterRGB';

const musics = {
  'GB版ポケモン金・銀キキョウシティ': kikyoCityBgm,
  'GB版ポケモン赤・緑ポケモンセンター': pokemonCenterRGB,
} as const;

class Player {
  public kikyoCityBgm = kikyoCityBgm;
  public musics = musics;
  public musicTitles = Object.keys(musics);
  public selectedMusicTitle: keyof typeof musics =
    'GB版ポケモン金・銀キキョウシティ';

  constructor() {
    this.musics[this.selectedMusicTitle].start();
  }

  public select(title: keyof typeof musics) {
    musics[this.selectedMusicTitle].stop();
    this.selectedMusicTitle = title;
    musics[title].start();
  }

  public async start() {
    await Tone.start();
    Tone.Transport.start();
    canvas.start();
  }

  public stop() {
    Tone.Transport.stop();
    canvas.stop();
  }

  public async toggle() {
    await Tone.start();
    Tone.Transport.toggle();
    canvas.toggle();
  }

  public mute(ch: 'ch1' | 'ch2' | 'ch3' | 'noise', muted: boolean) {
    Object.values(musics).forEach((music) => {
      music.mute(ch, muted);
    });
  }
}

export const player = new Player();

Tone.Transport.loop = true;

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const playButton = document.querySelector<HTMLButtonElement>('.play')!;

playButton.addEventListener('click', () => player.toggle());

if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  playButton.addEventListener('mouseenter', () => canvas.activateIconColor());
  playButton.addEventListener('mouseleave', () => canvas.deactivateIconColor());
}
