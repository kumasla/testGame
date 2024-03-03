class Monster3 extends Monster {
    constructor(scene, x, y,spriteKey) {
        super(scene, x, y, 'monster3');

        this.setScale(2); // 몬스터 크기 조정
        this.setCollideWorldBounds(true); // 화면 경계와 충돌
        this.setBounce(1); // 튕기기 설정
        this.speed = Phaser.Math.Between(50, 100); // 몬스터의 이동 속도를 랜덤하게 설정합니다.
        
        this.fireRate = 1500; // 1초마다 발사
        this.nextFire = 0;
    }

    update(){
        super.update();
        if (this.scene.time.now > this.nextFire) {
            const missile = new Missile(this.scene, this.x, this.y);
            const angle = Phaser.Math.Angle.Between(this.x, this.y, player.x, player.y);
            missile.fire(this.x, this.y, angle);
            this.nextFire = this.scene.time.now + this.fireRate;
        }
    }
}