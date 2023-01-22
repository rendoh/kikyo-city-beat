import 'the-new-css-reset';
import './player';
import * as Tone from 'tone';
import GUI from 'lil-gui';
import { player } from './player';
import { vars } from './vars';
const gui = new GUI();

gui.close();

const bpmController = gui
  .add(vars, 'bpm', 30, 360, 0.1)
  .name('BPM')
  .onChange((value: number) => {
    Tone.Transport.bpm.value = value;
  });

gui
  .add(vars, 'music', player.musicTitles)
  .setValue(player.selectedMusicTitle)
  .onChange((title: string) => {
    player.stop();
    player.select(title as keyof typeof player.musics);
    bpmController.setValue(player.musics[player.selectedMusicTitle].bpm);
  });

gui.add(vars, 'rotationSpeed', -1, 1, 0.1).name('rotation speed');

gui
  .add(vars, 'muteCh1')
  .name('mute ch1')
  .onChange((muted: boolean) => player.mute('ch1', muted));
gui
  .add(vars, 'muteCh2')
  .name('mute ch2')
  .onChange((muted: boolean) => player.mute('ch2', muted));
gui
  .add(vars, 'muteCh3')
  .name('mute ch3')
  .onChange((muted: boolean) => player.mute('ch3', muted));
gui
  .add(vars, 'muteNoise')
  .name('mute noise')
  .onChange((muted: boolean) => player.mute('noise', muted));
