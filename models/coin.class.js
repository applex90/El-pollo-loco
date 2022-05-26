class Coin extends CollectableObject {
    IMAGES_COLLECTABLE_COINS = [
        'img/8.Coin/Moneda1.png',
        'img/8.Coin/Moneda2.png'
    ];


    constructor(pos) {
        super().loadImage('img/8.Coin/Moneda1.png');
        this.loadImages(this.IMAGES_COLLECTABLE_COINS);
        this.x = pos[0];
        this.y = pos[1];
        this.animate();
    }


    animate() {
        setInterval(() => {
            //grow coin animation
            this.playAnimation(this.IMAGES_COLLECTABLE_COINS);
        }, 500)
    }
}
