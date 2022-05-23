class ThrowableObject extends MovableObject {

    IMAGES_CRASHED_BOTTLES = [
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png'
    ];
    throwDirectionInterval = 1;

    constructor(x, y) {
        super().loadImage('img/7.Marcadores/Icono/Botella.png');
        this.loadImages(this.IMAGES_CRASHED_BOTTLES);
        this.x = x;
        this.y = y;
        this.height = 90;
        this.width = 80;
        this.throw();
    }

    throw() {
        this.speedY = 30;
        this.applyGravity();
        this.throwToDirection();
        this.isOnGround();
    }


    isOnGround() {
        let fallInterval = setInterval(() => {
            if (this.y > 370) {
                this.playAnimationBottleCrash(this.IMAGES_CRASHED_BOTTLES);
                clearInterval(fallInterval);
                clearInterval(this.gravityInterval);
                clearInterval(this.throwDirectionInterval);
            }
        }, 20);
        
    }


    throwToDirection() {
        if (!world.character.otherDirection) {
            this.throwDirectionInterval = setInterval(() => {
                this.x += 10;
            }, 25);
        } else {
            this.throwDirectionInterval = setInterval(() => {
                this.x -= 10;
            }, 25);
        }
    }
}