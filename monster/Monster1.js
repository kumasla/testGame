class Monster1 extends Monster {
    constructor(scene, x, y) {
        super(scene, x, y, 'monster1');

        this.setScale(2); // 몬스터 크기 조정
        this.setCollideWorldBounds(true); // 화면 경계와 충돌
        this.setBounce(1); // 튕기기 설정
        this.speed = Phaser.Math.Between(50, 100); // 몬스터의 이동 속도를 랜덤하게 설정합니다.

        this.setupAnimations();
    }

    setupAnimations() {
        this.play('walk_monster1');
    }
} 