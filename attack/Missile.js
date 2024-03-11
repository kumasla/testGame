class Missile extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'missile');

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setScale(0.01);

        // 미사일 속도
        this.speed = 500;

        // 생성자에서 this.scene 설정
        this.scene = scene;

        // 폭발 이펙트 미리 생성
        this.explosionParticles = this.scene.add.particles('explosion');
        this.explosionEmitter = this.explosionParticles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD',
            lifespan: 200,
        });
        // 이펙트의 깊이 설정
        this.explosionParticles.setDepth(99);
    }

    fire(x, y, angle) {
        this.setPosition(x, y);
        this.setRotation(angle);
        this.setVelocityX(Math.cos(angle) * this.speed);
        this.setVelocityY(Math.sin(angle) * this.speed);

        // 미사일과 대상의 충돌 설정
        this.scene.physics.add.overlap(
            this, player, // 충돌 대상
            this.checkCollision, // 충돌 처리 함수
            null, // 콜백 컨텍스트
            this // 호출 컨텍스트
        );

        this.scene.physics.add.overlap(this, player, this.checkCollision, null, this);
    }

    checkCollision(missile, defender) {
        this.explosionEmitter.explode(20, missile.x, missile.y);
        missile.destroy(); // 미사일 제거
        console.log('플레이어가 미사일과 충돌했습니다.');

    }
}