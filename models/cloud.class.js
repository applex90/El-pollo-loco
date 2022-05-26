class Cloud extends MovableObject {
    y = 40;
    height = 250;
    width = 500;

    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
        this.x = Math.random() * 2000; // Zahl zwischen 120 (120 ist x von DrawableObject) und 2120
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 20);
    }
}

