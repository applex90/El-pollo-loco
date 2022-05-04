class Cloud extends MovableObject {
    y = 40;
    height = 250;
    width = 500;

    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');

        this.x = Math.random() * 2000; // Zahl zwischen 200 und 2200
        this.animate();

    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 20);
    }
}

