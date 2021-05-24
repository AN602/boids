import Boid from "../objects/boid";

export default class MainScene extends Phaser.Scene {
  boidArray: Boid[] = [];
  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    for (let i = 0; i < 20; i++) {
      const boid = new Boid(this, Math.random() * 100, Math.random() * 100);
      this.boidArray.push(boid);
    }
  }

  update() {
    this.boidArray.forEach((boid) => boid.update());
  }
}
