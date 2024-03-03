class Explosion extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'explosion');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setScale(0.01);
        this.speed = 500;
    }

    boom(x, y) {
        let particles = this.scene.add.particles('explosion');
        let emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD',
            lifespan: 200,
            on: true
        });
        emitter.explode(20, x, y);
    }
}