class BarEnergyEnemy extends StatusBar {
    IMAGES_ENERGY = [
        'img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/100_.png'
    ];


    constructor() {
        super(); // Methoden von übergeordnetem Objekt initialisieren
        this.loadImages(this.IMAGES_ENERGY);
        this.x = 550;
        this.y = 0;
        this.width = 180;
        this.height = 50;
        this.setPercentage(100);
    }


    //setPercentage(50);
    setPercentage(percentage) {
        this.percentage = percentage; // => 0 ... 5
        let path = this.IMAGES_ENERGY[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
}