import Phaser from"phaser";import Entity from"./Entity";export default class CarrierShip extends Entity{constructor(r,t,e){super(r,t,e,"sprEnemy2","CarrierShip"),this.body.velocity.y=Phaser.Math.Between(50,100),this.play("sprEnemy2")}}