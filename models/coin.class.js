class Coin extends CollectableObject {
    previousY = 90;
    
    IMAGES_COLLECTABLE_COINS = [
        'img/8.Coin/Moneda1.png',
        'img/8.Coin/Moneda2.png'
    ];

    constructor() {
        super().loadImage('img/8.Coin/Moneda1.png');
        this.loadImages(this.IMAGES_COLLECTABLE_COINS);
        this.x = 700 + Math.random() * (1400);
        this.structure();
        this.animate();
    }

    animate() {
        setInterval(() => {
            //grow bottles
            this.playAnimation(this.IMAGES_COLLECTABLE_COINS);
        }, 500)
    }

    structure() {
        this.y = this.previousY;
        Coin.previousY = this.previousY + 30;
    }
}
