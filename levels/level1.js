let level1;
let previousX = 300;
let previousY = 180;
let directionChange = 0;
let coinCointer = 0;
let chickenInterval;

function initLevel() {
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