let level1;
let previousX = 300;
let previousY = 180;
let directionChange = 0;
let coinCointer = 0;

function initLevel() {


    level1 = new Level([
        new Chicken(),
        new Chicken(),
        new Chicken(),
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
            new Bottle(),
        ],
        [
            new Coin(getSnakedCoins()),
            new Coin(getSnakedCoins()),
            new Coin(getSnakedCoins()),
            new Coin(getSnakedCoins()),
            new Coin(getSnakedCoins()),
            new Coin(getSnakedCoins()),
            new Coin(getSnakedCoins()),
            new Coin(getSnakedCoins()),
            new Coin(getSnakedCoins()),
            new Coin(getSnakedCoins()),
            new Coin(getSnakedCoins()),
            new Coin(getSnakedCoins()),
            new Coin(getSnakedCoins()),
            new Coin(getSnakedCoins()),
            new Coin(getSnakedCoins()),
            new Coin(getSnakedCoins()),
            new Coin(getSnakedCoins()),
            new Coin(getSnakedCoins()),
            new Coin(getSnakedCoins()),
            new Coin(getSnakedCoins())
        ]);
}


function getSnakedCoins() {
    calcPositionX();
    checkPositionY();
    changeDirection();
    return [x, y];
}


function calcPositionX() {
    if (coinCointer < 5) {
        previousX = previousX + 40;
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