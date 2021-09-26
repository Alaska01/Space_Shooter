import Phaser from 'phaser';
import CreditScene from './Scenes/CreditScene';
import UserNameScene from './Scenes/UserNameScene';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import SceneMain from './Scenes/SceneMain';
import SceneGameOver from './Scenes/SceneGameOver';
import LeaderBoard from './Scenes/LeaderBoard';
import './assets/css/styles.css';

const config = {
  type: Phaser.WEBGL,
  width: 600,
  height: 640,
  parent: 'content',
  dom: {
    createContainer: true,
  },
  backgroundColor: 'black',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  scene: [
    BootScene,
    CreditScene,
    UserNameScene,
    PreloaderScene,
    TitleScene,
    LeaderBoard,
    SceneMain,
    SceneGameOver,
  ],
  pixelArt: true,
  roundPixels: true,
};

window.global = {
  score: 0,
  emitter: null,
};

window.game = new Phaser.Game(config);