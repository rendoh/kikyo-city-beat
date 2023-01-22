import * as Tone from 'tone';
import GUI from 'lil-gui';
import { kikyoCityBgm } from './musics/kikyoCityBgm';
const gui = new GUI();

gui.close();

export const vars = {
  bpm: 116.6,
  rotationSpeed: 0.3,
  muteCh1: false,
  muteCh2: false,
  muteCh3: false,
  muteNoise: false,
};

gui
  .add(vars, 'bpm', 30, 360, 0.1)
  .name('BPM')
  .onChange((value: number) => {
    Tone.Transport.bpm.value = value;
  });

gui.add(vars, 'rotationSpeed', -1, 1, 0.1).name('rotation speed');

gui
  .add(vars, 'muteCh1')
  .name('mute ch1')
  .onChange((muted: boolean) => kikyoCityBgm.mute('ch1', muted));
gui
  .add(vars, 'muteCh2')
  .name('mute ch2')
  .onChange((muted: boolean) => kikyoCityBgm.mute('ch2', muted));
gui
  .add(vars, 'muteCh3')
  .name('mute ch3')
  .onChange((muted: boolean) => kikyoCityBgm.mute('ch3', muted));
gui
  .add(vars, 'muteNoise')
  .name('mute noise')
  .onChange((muted: boolean) => kikyoCityBgm.mute('noise', muted));
