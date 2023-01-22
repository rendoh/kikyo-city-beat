import 'the-new-css-reset';
import * as Tone from 'tone';
import { Canvas } from './Canvas';
import { kikyoCityBgm } from './musics/kikyoCityBgm';

Tone.Transport.loop = true;

const canvas = new Canvas();

kikyoCityBgm.start();

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const playButton = document.querySelector<HTMLButtonElement>('.play')!;

async function toggle() {
  await Tone.start();
  Tone.Transport.toggle();
  canvas.toggle();
}

playButton.addEventListener('click', toggle);

if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  playButton.addEventListener('mouseenter', () => canvas.activateIconColor());
  playButton.addEventListener('mouseleave', () => canvas.deactivateIconColor());
}
