import Phaser from 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloaderScene' });
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    const { width, height } = this.game.config;
    const loadingText = this.make.text({
      x: width * 0.5,
      y: height * 0.5 - 50,
      text: 'Loading...',
      style: {
        font: '40px monospace',
        fill: '#70e80e',
      },
    });

    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width * 0.5,
      y: height * 0.5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    // update progress bar
    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100, 10)}%`);
    });

    // Switch to TitleScene when complete
    this.load.on('complete', () => {
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);

    this.load.audio('music', 'assets/audio/music.mp3');
    this.load.image('sprBg0', 'assets/img/sprBg0.png');
    this.load.image('sprBg1', 'assets/img/sprBg1.png');
    this.load.audio('sndBtnOver', 'assets/audio/sndBtnOver.wav');
    this.load.audio('sndBtnDown', 'assets/audio/sndBtnDown.wav');
    this.load.image('leader', 'assets/img/blue_button02.png');
    this.load.image('menu', 'assets/img/blue_button02.png');
    this.load.image('Quit', 'assets/img/blue_button02.png');
    this.load.image('play', 'assets/img/blue_button01.png');
    this.load.image('restart', 'assets/img/blue_button02.png');
  }

  ready() {
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('CreditScene');
    }
  }
}