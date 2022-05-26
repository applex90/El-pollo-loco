class BarBotella extends StatusBar {
    IMAGES_BOTELLA = [
        'img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png'
    ];


    constructor() {
        super(); // Methoden von übergeordnetem Objekt initialisieren
        this.loadImages(this.IMAGES_BOTELLA);
        this.x = 260;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.setPercentage(0);
    }


    //setPercentage(50);
    setPercentage(percentage) {
        this.percentage = percentage; // => 0 ... 5
        let path = this.IMAGES_BOTELLA[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
}