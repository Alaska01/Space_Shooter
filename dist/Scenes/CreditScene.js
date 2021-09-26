import Phaser from 'phaser';

export default class CreditScene extends Phaser.Scene {
  constructor() {
    super({ key: 'CreditScene' });
  }

  create() {
    this.creditsText = this.add.text(0, 0, 'Created by:', { fontSize: '48px', fill: '#fff' });
    this.madeByText = this.add.text(0, 0, 'Aye Daniel', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#03fc07',
      align: 'center',
    });
    this.zone = this.add.zone(this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      this.game.config.width,
      this.game.config.height);
    Phaser.Display.Align.In.Center(
      this.creditsText,
      this.zone,
    );
    Phaser.Display.Align.In.Center(
      this.madeByText,
      this.zone,
    );
    this.madeByText.setY(1000);
    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: -100,
      ease: 'Power1',
      duration: 2000,
      delay: 1000,
      onComplete: () => {
        // eslint-disable-next-line no-unused-expressions
        this.destroy;
      },
    });
    this.madeByTween = this.tweens.add({
      targets: this.madeByText,
      y: -50,
      ease: 'Power1',
      duration: 8000,
      delay: 1000,
      onComplete: () => {
        // eslint-disable-next-line no-unused-expressions
        this.madeByTween.destroy;
        this.scene.start('UserNameScene');
      },
    });
  }
}