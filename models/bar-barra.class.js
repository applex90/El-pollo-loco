class BarBarra extends StatusBar {
    IMAGES_BARRA = [
        'img/7.Marcadores/Barra/Marcador moneda/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/100_.png'
    ];


    constructor() {
        super(); // Methoden von übergeordnetem Objekt initialisieren
        this.loadImages(this.IMAGES_BARRA);
        this.x = 40;
        this.y = 40;
        this.width = 180;
        this.height = 50;
        this.setPercentage(0);
    }


    //setPercentage(50);
    setPercentage(percentage) {
        this.percentage = percentage; // => 0 ... 5
        let path = this.IMAGES_BARRA[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
}