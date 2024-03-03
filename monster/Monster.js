class Monster extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y,spriteKey) {
        super(scene, x, y, spriteKey);
        scene.add.existing(this);
        scene.physics.add.existing(this);

        // 미사일과 대상의 충돌 설정
        this.scene.physics.add.overlap(
            this, player, // 충돌 대상
            this.checkCollision, // 충돌 처리 함수
            null, // 콜백 컨텍스트
            this // 호출 컨텍스트
        );
    }

    update() {
        // 플레이어와 몬스터 사이의 거리를 계산합니다.
        const dx = player.x - this.x;
        const dy = player.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // 몬스터의 이동 속도를 결정합니다.

        const speed = 100; // 적절한 값을 설정하세요.
        // 플레이어를 향해 천천히 이동합니다.
        this.setVelocity(dx / distance * speed, dy / distance * speed);

    }

    checkCollision(monster, defender) {
        monster.destroy(); // 미사일 제거
        console.log('플레이어가 몬스터와 충돌했습니다.');
    }


}