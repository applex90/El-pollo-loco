let level1;
let previousX = 300;
let previousY = 180;
let directionChange = 0;
let coinCointer = 0;
let chickenInterval;
let images = [];
let imagePaths = [
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-40.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-51.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-52.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-54.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-55.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-41.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-42.png',
    'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-43.png',
    'img/7.Marcadores/Barra/Marcador moneda/azul/0_.png',
    'img/7.Marcadores/Barra/Marcador moneda/azul/20_.png',
    'img/7.Marcadores/Barra/Marcador moneda/azul/40_.png',
    'img/7.Marcadores/Barra/Marcador moneda/azul/60_.png',
    'img/7.Marcadores/Barra/Marcador moneda/azul/80_.png',
    'img/7.Marcadores/Barra/Marcador moneda/azul/100_.png',
    'img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png',
    'img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
    'img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
    'img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
    'img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
    'img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png',
    'img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
    'img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
    'img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
    'img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
    'img/7.Marcadores/Barra/Marcador vida/azul/80_.png',
    'img/7.Marcadores/Barra/Marcador vida/azul/100_.png',
    'img/6.botella/2.Botella_enterrada1.png',
    'img/6.botella/2.Botella_enterrada2.png',
    'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
    'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
    'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png',
    'img/5.Fondo/Capas/4.nubes/1.png',
    'img/8.Coin/Moneda1.png',
    'img/8.Coin/Moneda2.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png',
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
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G20.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
    'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png',
    'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png',
    'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png',
    'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png',
    'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png',
    'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png',
    'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png',
    'img/5.Fondo/Capas/5.cielo_1920-1080px.png',
    'img/5.Fondo/Capas/3.Fondo3/2.png',
    'img/5.Fondo/Capas/2.Fondo2/2.png',
    'img/5.Fondo/Capas/1.suelo-fondo1/2.png'
]


function initLevel() {
    preloadImages();
    createNewChicken();

    level1 = new Level([
        new Chicken(400),
        new Chicken(650),
        new Chicken(850),
        new Chicken(1180),
        new Chicken(1500),
        new Endboss()
    ],
        [
            new Cloud(),
            new Cloud
        ],
        [
            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', -719),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', -719),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', (719) * 2),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', (719) * 2),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', (719) * 2),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', (719) * 2),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', (719) * 3),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', (719) * 3),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', (719) * 3),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', (719) * 3)
        ],
        [
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle()
        ],
        [
            new Coin(getMontainStructuredCoins()),
            new Coin(getMontainStructuredCoins()),
            new Coin(getMontainStructuredCoins()),
            new Coin(getMontainStructuredCoins()),
            new Coin(getMontainStructuredCoins()),
            new Coin(getMontainStructuredCoins()),
            new Coin(getMontainStructuredCoins()),
            new Coin(getMontainStructuredCoins()),
            new Coin(getMontainStructuredCoins()),
            new Coin(getMontainStructuredCoins()),
            new Coin(getMontainStructuredCoins()),
            new Coin(getMontainStructuredCoins()),
            new Coin(getMontainStructuredCoins()),
            new Coin(getMontainStructuredCoins()),
            new Coin(getMontainStructuredCoins()),
            new Coin(getMontainStructuredCoins()),
            new Coin(getMontainStructuredCoins()),
            new Coin(getMontainStructuredCoins()),
            new Coin(getMontainStructuredCoins()),
            new Coin(getMontainStructuredCoins())
        ]);
}


function createNewChicken() {
    let chickenInterval = setInterval(() => {
        let offset = world.character.x + 670;
        let positionEndboss = world.enemies[level1.enemies.length - 1].x;
        spliceChicken(offset, positionEndboss);
        clearInterval(chickenInterval);
        createNewChicken();
    }, randomTime());
}


function spliceChicken(offset, positionEndboss) {
    if (offset < positionEndboss) {
        let chicken = new Chicken(offset);
        level1.enemies.splice(-1, 0, chicken);
    }
}


function randomTime() {
    return Math.floor(3000 + (Math.random() * 15000));
}


function getMontainStructuredCoins() {
    calcPositionX();
    checkPositionY();
    changeDirection();
    return [x, y];
}


function calcPositionX() {
    if (coinCointer < 5) {
        previousX = previousX + 65;
        coinCointer += 1;
    } else {
        coinCointer = 1;
        previousX = previousX + 240;
        previousY = previousY + 40;
    }

    x = previousX;
}


function checkPositionY() {
    if ((previousY < 140 || previousY > 60) && directionChange == 0) {
        directionChange = 0;
    }

    if (previousY <= 60) {
        directionChange = 1;
    }

    if (previousY >= 140) {
        directionChange = 0;
    }
}


function changeDirection() {
    if (directionChange == 0) {
        previousY = previousY - 40;
    } else if (directionChange == 1) {
        previousY = previousY + 40;
    }
    y = previousY;
}


function preloadImages() {

    for (let i = 0; i < imagePaths.length; i++) {
        let image = new Image();
        image.src = imagePaths[i];
        images.push(image); // push image-path to images-array (which contains all image-paths)
    }

}
