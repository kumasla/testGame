let Timer = 0;

class MonsterController {
    constructor(scene,player) {
        this.scene = scene;
        this.monstersGroup = scene.physics.add.group(); // 몬스터 그룹 생성
        
        scene.load.spritesheet('monster1', 'assets/monster/굼바(마리오).png', {
            frameWidth: 14,
            frameHeight: 18
        });
        scene.load.spritesheet('monster2', 'assets/monster/워들(커비).png', {
            frameWidth: 30,
            frameHeight: 40
        });
        scene.load.spritesheet('monster3', 'assets/monster/쿵쿵(마리오).png', {
            frameWidth: 32.5,
            frameHeight: 50
        });
    }


    Level(){
        let level = Math.floor(Math.random() * 100) + 1;
        if (level >= 90) {
            return 3;
        } else if (level >= 70 && level < 90) { // 70 이상 90 미만
            return 2;
        } else {
            return 1; // 70 미만
        }
    }
    Random() {
        return Math.random() < 0.5 ? -1 : 1;
    }

    RandomNumber(number){
        // 여기서 this.Random()을 호출해야 합니다.
        return (150 + Math.floor(Math.random() * number)) * this.Random();
    }

    // 몬스터 생성 메서드
    createMonster() {
        // 몬스터를 생성하고 몬스터 그룹에 추가합니다.
        let monster;
        let spriteKey;
        let level = this.Level();

        if(level == 1){
            spriteKey = 'monster1';
            monster = new Monster1(this.scene, player.x + this.RandomNumber(player.x ,150), player.y+ this.RandomNumber(player.y ,150),spriteKey, this.player);
        }else if(level == 2){
            spriteKey = 'monster2';
            monster = new Monster2(this.scene, player.x + this.RandomNumber(player.x ,150), player.y+ this.RandomNumber(player.y ,150),spriteKey, this.player);
        }else{
            spriteKey = 'monster3';
            monster = new Monster3(this.scene, player.x + this.RandomNumber(player.x ,150), player.y+ this.RandomNumber(player.y ,150),spriteKey, this.player);
        }


        this.scene.physics.add.collider(this.monstersGroup, monster); // 몬스터 그룹과 새로운 몬스터 간의 충돌 감지
            
        this.monstersGroup.add(monster); // 생성된 몬스터를 그룹에 추가합니다.
        
        return monster;
    }
    

    update() {
        if (Timer > 60) {
            Timer = 0;
            this.createMonster(); // 몬스터 추가
        }

        // 몬스터 그룹의 몬스터들을 갱신합니다.
        this.monstersGroup.children.each(monster => {
            monster.update();
        });
        
        Timer++;
    }
}