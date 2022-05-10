class Bottle extends CollectableObject {
    y = 370;
    IMAGES_COLLECTABLE_BOTTLES = [
        'img/6.botella/2.Botella_enterrada1.png',
        'img/6.botella/2.Botella_enterrada2.png'
    ];
    lastThrow = 0;

    constructor() {
        super().loadImage('img/6.botella/2.Botella_enterrada1.png');
        this.x = 700 + Math.random() * (1500);
        this.loadImages(this.IMAGES_COLLECTABLE_BOTTLES);
        this.animate();
    }

    animate() {
        setInterval(() => {
            //shake bottles
            this.playAnimation(this.IMAGES_COLLECTABLE_BOTTLES);
        }, 500)
    }


    isThrown() {
        let timepassed = new Date().getTime() - this.lastThrow; //Differece in ms
        timepassed = timepassed / 1000; //Difference in s
        return timepassed < 2; // returned true or false if timepassed < 2 s
    }    

}
