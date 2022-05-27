class ThrowableObject extends MovableObject {
    IMAGES_CRASHED_BOTTLES = [
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png'
    ];
    IMAGES_ROTATE_BOTTLE = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
    ];
    throwDirectionInterval = 1;

    
    constructor(x, y) {
        super().loadImage('img/7.Marcadores/Icono/Botella.png');
        this.loadImages(this.IMAGES_CRASHED_BOTTLES);
        this.loadImages(this.IMAGES_ROTATE_BOTTLE);
        this.x = x;
        this.y = y;
        this.height = 70;
        this.width = 70;
        this.throw();
    }


    throw() {
        this.speedY = 22;
        this.applyGravity();
        this.rotateBottle();
        this.throwToDirection();
        this.isOnGround();
    }


    rotateBottle(){
        this.rotateInterval = setInterval(()=> {
            this.playAnimation(this.IMAGES_ROTATE_BOTTLE);
        },150);
        
    }

  
    isOnGround() {
        let fallInterval = setInterval(() => {
            if (this.y > 350) {
                clearInterval(this.rotateInterval);
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
                this.x += 6;
            }, 25);
        } else {
            this.throwDirectionInterval = setInterval(() => {
                this.x -= 6;
            }, 25);
        }
    }
}