class ThrowableObject extends MovableObject {

    constructor(x, y) {
        super().loadImage('img/7.Marcadores/Icono/Botella.png');
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
    }


    throwToDirection() {
        if (!world.character.otherDirection) {
            setInterval(() => {
                this.x += 10;
            }, 25);
        } else {
            setInterval(() => {
                this.x -= 10;
            }, 25);
        }
    }

}