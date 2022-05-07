class Coin extends CollectableObject {
    // static previousY = 90;

    IMAGES_COLLECTABLE_COINS = [
        'img/8.Coin/Moneda1.png',
        'img/8.Coin/Moneda2.png'
    ];


    constructor(pos) {
        super().loadImage('img/8.Coin/Moneda1.png');
        this.loadImages(this.IMAGES_COLLECTABLE_COINS);
        this.x = pos[0];
        this.y = pos[1];
        // this.structure();
        this.animate();
    }

    animate() {
        setInterval(() => {
            //grow bottles
            this.playAnimation(this.IMAGES_COLLECTABLE_COINS);
        }, 500)
    }

    // structure() {
    //     this.y = Coin.previousY;
    //     Coin.previousY = Coin.previousY + 30;
    // }
}
