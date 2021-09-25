import Phaser from 'phaser';
import ScrollingBackground from '../Entities/Scrolling';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: 'TitleScene' });
  }

  create() {
    this.add.text(2, this.game.config.height - 2,
      'PLAYER CONTROL KEYS:\n\nMOVE LEFT: [←]\n\nMOVE RIGHT: [→]\n\nMOVE DOWN: [↓]\n\nMOVE UP: [↑]\n\nSHOOT: [SPACEBAR]')
      .setOrigin(-0.2, 1.3);
    this.title = this.add.text(this.game.config.width * 0.5, 128, 'SPACE SHOOTER', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#fffffa',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };
    window.global.music = this.sound.add('music');
    window.global.music.play();
    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.40,
      'play',

    )
      .setInteractive()
      .on('pointerup', () => {
        this.btnPlay.setTexture('play');
        this.sfx.btnOver.play();
        this.scene.start('SceneMain');
      }, this);
    this.gameText = this.add.text(
      this.game.config.width * 0.44,
      this.game.config.height * 0.38,
      'Play', { fontSize: '24px', fill: '#fff' },
    );

    this.btnLeaderboard = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'leader',
    )
      .setInteractive()
      .on('pointerup', () => {
        this.btnPlay.setTexture('leader');
        this.sfx.btnOver.play();
        this.scene.start('Leaderboard');
      });
    this.gameText = this.add.text(220, 306, 'LeaderBoard', { fontSize: '24px', fill: '#fff' });

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