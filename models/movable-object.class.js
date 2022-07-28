class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    bottles = 0;
    coins = 0;
    lastHit = 0;
    lastThrow = 0;
    coin_sound = new Audio('audio/coin.mp3');
    bottle_sound = new Audio('audio/bottle.mp3');
    gravityInterval;


    // character.isColliding(chicken);
    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
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
        this.coin_sound.loop = false;
        this.coin_sound.currentTime = 0;
        this.coin_sound.play();
    }


    resetBottleSound() {
        this.bottle_sound.loop = false;
        this.bottle_sound.currentTime = 0;
        this.bottle_sound.play();
    }


    isDead() {
        return this.energy == 0;
    }


    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; //Differece in ms
        timepassed = timepassed / 500; //Difference in 0.5s (500 ms)
        return timepassed < 1; // returned true or false if timepassed < 1 s
    }


    isThrown() {
        let timepassedThrown = new Date().getTime() - this.lastThrow; //Differece in ms
        timepassedThrown = timepassedThrown / 1000; //Difference in s
        // console.log(timepassedThrown);
        // console.log(this.lastThrow);
        return timepassedThrown > 1; // returned true or false if timepassed > 1 s
    }

    
    applyGravity() {
        this.gravityInterval = setInterval(() => {
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


    playAnimationBottleCrash(images) {
        this.currentImage = 0;
        let crashInterval = setInterval(() => {
            if (this.currentImage < images.length) {
                let i = this.currentImage % images.length;
                let path = images[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            } else {
                clearInterval(crashInterval);
                world.hit = false;
                this.y = -100; //Hide bottle
            }
        }, 120);
    }
}