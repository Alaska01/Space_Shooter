// api key is Q8XS8Lw5MjG4biRqnKZG
import Phaser from 'phaser';
import ScrollingBackground from '../Entities/Scrolling';
import { postScore } from './api/api';

export default class SceneGameOver extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneGameOver' });
  }

  create() {
    window.global.music.stop();
    window.global.music.play();
    window.global.scoreText = this.add.text(100, 200, `Final score: ${window.global.score}`, {
      fontFamily: 'monospace',
      fontSize: 32,
      fontStyle: 'bold',
      color: '#024704',
      align: 'center',
    });
    postScore(window.global.user.value, window.global.score);

    this.title = this.add.text(this.game.config.width * 0.5, 100, 'GAME OVER', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#f51d0a',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),

    };
    this.btnRestart = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'restart',
    );

    this.btnRestart.setInteractive();

    this.btnRestart.on('pointerup', () => {
      this.btnRestart.setTexture('restart');
      this.sfx.btnOver.play();
      window.global.music.stop();
      this.scene.start('SceneMain');
    }, this);
    this.gameText = this.add.text(
      this.game.config.width * 0.38,
      this.game.config.height * 0.48, 'Play Again', { fontSize: '24px', fill: '#fff' },
    );

    this.btnMenu = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.7,
      'menu',
    );

    this.btnMenu.setInteractive();

    this.btnMenu.on('pointerup', () => {
      this.btnMenu.setTexture('menu');
      this.sfx.btnOver.play();
      window.global.music.stop();
      this.scene.start('TitleScene');
    }, this);

    this.gameText = this.add.text(260, 435, 'Menu', { fontSize: '24px', fill: '#fff' });

    this.btnQuit = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.85,
      'Quit',
    );

    this.btnQuit.setInteractive();

    this.btnQuit.on('pointerup', () => {
      this.btnQuit.setTexture('Quit');
      this.sfx.btnOver.play();
      window.global.music.stop();
      this.scene.start('UserNameScene');
    }, this);

    this.gameText = this.add.text(260, 530, 'Quit', { fontSize: '24px', fill: '#fff' });

    this.backgrounds = [];
    for (let i = 0; i < 5; i += 1) {
      const keys = ['sprBg0', 'sprBg1'];
      const key = keys[Phaser.Math.Between(0, keys.length - 1)];
      const bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }
  }

  update() {
    for (let i = 0; i < this.backgrounds.length; i += 1) {
      this.backgrounds[i].update();
    }
  }
}