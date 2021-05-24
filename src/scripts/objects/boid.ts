export default class Boid extends Phaser.GameObjects.Polygon {
    static SHAPE = [0, 2, 8, 2, 8, 0, 12, 5, 8, 10, 8, 8, 0, 8];

    direction = { x: 1, y: 0 };
    speed = 4;

    constructor(scene, startX, startY) {
        super(scene, startX, startY, Boid.SHAPE, 0x6666ff);
        scene.add.existing(this)
        this.setOrigin(0)
    }

    public update() {
        this.makeDecision();
    }

    private makeDecision() {
        if (this.scene.game.canvas.width < this.x) {
            this.setAngle(180);
            this.directionX = -1;
        }

        if (this.x < 0) {
            this.setAngle(0);
            this.directionX = 1;
        }
        this.setX(this.x + (this.speed * this.directionX));
        this.setPosition()
    }
}
