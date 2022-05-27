class Chicken extends MovableObject {
    height = 100;
    y = 330;
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];
    alarm_sound = new Audio('audio/chicken.mp3');
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };

    
    constructor(offset) {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = offset + Math.random() * 100;
        this.speed = 0.25 + Math.random() * 0.5;
        this.playSoundAlarm();
        this.animate();
    }


    animate() {
        this.chickenMoveLeftInterval = setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        this.chickenWalkingInterval = setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }

    
    playSoundAlarm() {
        this.alarm_sound.loop = false;
        this.alarm_sound.currentTime = 0;
        this.alarm_sound.play();
    }
}