class MovableObject extends DrawableObjects {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;


    // character.isColliding(chicken);
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }


    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
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
            return this.y < 140;
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