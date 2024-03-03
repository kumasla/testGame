class Missile extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'missile');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setScale(0.01);
        this.speed = 500;
        // explosion 객체 생성
        this.explosion = new Explosion(scene, 0, 0);
    }

    fire(x, y, angle) {
        this.setPosition(x, y);
        this.setRotation(angle);
        this.setVelocityX(Math.cos(angle) * this.speed);
        this.setVelocityY(Math.sin(angle) * this.speed);

        this.scene.physics.add.overlap(
            this, player,
            this.checkCollision.bind(this),
            null,
            this
        );
    }

    checkCollision(missile, defender) {
        missile.destroy();
        this.explosion.boom(missile.x, missile.y);
    }
}