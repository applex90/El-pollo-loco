class Cloud extends MovableObject {
    y = 10;
    height= 250;
    width = 500;

    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');

        this.x = Math.random() * 500; // Zahl zwischen 200 und 700
        this.animate();
        
    }

    animate() {
        this.moveLeft();
    }
}

