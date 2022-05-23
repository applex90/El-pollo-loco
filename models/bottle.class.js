class Bottle extends CollectableObject {
    y = 370;
    IMAGES_COLLECTABLE_BOTTLES = [
        'img/6.botella/2.Botella_enterrada1.png',
        'img/6.botella/2.Botella_enterrada2.png'
    ];
   

    constructor() {
        super().loadImage('img/6.botella/2.Botella_enterrada1.png');
        this.x = 700 + Math.random() * (1500);
        this.loadImages(this.IMAGES_COLLECTABLE_BOTTLES);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COLLECTABLE_BOTTLES);
        }, 500)
    }

}
