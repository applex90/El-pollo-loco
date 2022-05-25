class Endboss extends MovableObject {
    height = 400;
    width = 250;
    y = 55;
    hadFirstContact = false;
    hurtIntervalRunning = false;
    deadIntervalRunning = false;

    IMAGES_WALK = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png'
    ];
    IMAGES_ALERTNESS_ATTACK = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G13.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G14.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G15.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G16.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G17.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G18.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G19.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G20.png'
    ];
    IMAGES_HURT = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png'

    ];
    IMAGES_DEAD = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALK[0]);
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_ALERTNESS_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 2200;
        this.speed = 8.5;
        this.animate();
    }

    animate() {

        setInterval(() => {
            let distance_to_character = this.x - world.character.x;

            // console.log("Endboss", this.x);
            // console.log("Character", world.character.x);
            // console.log("distance", distance_to_character);

            if (world.character.x > 1700 && !this.hadFirstContact) {
                this.hadFirstContact = true;
            }

            if (this.hadFirstContact && distance_to_character < 500 && distance_to_character > 250 && !this.hurtIntervalRunning && !this.deadIntervalRunning) {
                this.playAnimation(this.IMAGES_WALK);
                this.moveLeft();
            }

            if (this.hadFirstContact && distance_to_character < 250 && !this.hurtIntervalRunning && !this.deadIntervalRunning) {
                this.playAnimation(this.IMAGES_ALERTNESS_ATTACK);
            }

        }, 200);
    }

    hurtAnimation() {
        let i = 0;
        this.hurtIntervalRunning = true;

        let hurtInterval = setInterval(() => {

            if (i < 3) {
                this.playAnimation(this.IMAGES_HURT);
                i++;
            } else {
                clearInterval(hurtInterval);
                this.hurtIntervalRunning = false;
            }
        }, 500);
    }


    deadAnimation() {
        let i = 0;
        this.deadIntervalRunning = true;

        let deadInterval = setInterval(() => {

            if (i < 3) {
                this.playAnimation(this.IMAGES_DEAD);
                i++;
            } else {
                console.info('you win');
                clearInterval(deadInterval);
                world.showGameOverScreen();
            }
        }, 500);
    }

}