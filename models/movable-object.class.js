class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    bottles = 0;
    coins = 0;
    lastHit = 0;
    coin_sound = new Audio('audio/coin.mp3');
    bottle_sound = new Audio('audio/bottle.mp3');


    // character.isColliding(chicken);
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }


    hitEnemy() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    hitBottle() {
        this.bottles += 20;
        this.resetBottleSound();
        if (this.bottles >= 100) {
            this.bottles = 100;
        }
    }


    hitCoin() {
        this.coins += 5;
        this.resetCoinSound()
        if (this.coins >= 100) {
            this.coins = 100;
        }
    }


    resetCoinSound() {
        let playCoin = this.coin_sound.play();
        if (playCoin !== undefined) {
            playCoin.then(() => {
                setTimeout(() => {
                    this.coin_sound.pause();
                    this.coin_sound.currentTime = 0; //Reset time to 0 s
                }, 60);
            })
        }
    }


    resetBottleSound() {
        let playBottle = this.bottle_sound.play();
        if (playBottle !== undefined) {
            playBottle.then(() => {
                setTimeout(() => {
                    this.bottle_sound.pause();
                    this.bottle_sound.currentTime = 0; //Reset time to 0 s
                }, 300);
            })
        }
    }


    isDead() {
        return this.energy == 0;
    }


    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; //Differece in ms
        timepassed = timepassed / 1000; //Difference in s
        return timepassed < 1; // returned true or false if timepassed < 1 s
    }


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }


    isAboveGround() {
        if (this instanceof ThrowableObject) { //Throwable objects should always fall
            return true;
        } else {
            return this.y < 155;
        }
    }


    moveRight(params) {
        this.x += this.speed;
    }


    moveLeft() {
        this.x -= this.speed;
    }


    jump() {
        this.speedY = 30;
    }


    playAnimation(images) {
        let i = this.currentImage % images.length; // let i = 7 % 6 => 1, Rest 1;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}