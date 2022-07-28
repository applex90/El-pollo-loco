class World {
    character = new Character();
    level = level1;
    enemies = level1.enemies; //to get access in world
    clouds = level1.clouds;
    backgroundObjects = level1.backgroundObjects;
    bottles = level1.bottles;
    coins = level1.coins;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    energyBar = new BarEnergy();
    energyEnemyBar = new BarEnergyEnemy();
    barraBar = new BarBarra();
    botellaBar = new BarBotella();
    throwableObjects = [];
    enemyHeightStep = 5;
    canyon_sound = new Audio('audio/canyon.mp3');
    gameover_sound = new Audio('audio/gameover.mp3');
    hitEndbossCounter = 100;
    hit = false;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.playBackgroundSound();
    }


    playBackgroundSound() {
        this.canyon_sound.play();
        this.canyon_sound.loop = true;
    }


    setWorld() {
        this.character.world = this;
    }


    run() {
        this.runTimer = setInterval(() => {
            this.checkCollisionsWithEnemy();
            this.checkCollisionsWithBottle();
            this.checkCollisionsWithCoin();
            this.checkThrowObjects();
            this.checkThrowObjectsColissionWithEnemy();
        }, 60);
    }


    stopActions() {
        clearInterval(this.runTimer);
        clearInterval(this.character.animateInterval);
        clearInterval(chickenInterval);
        this.canyon_sound.pause();
        this.gameover_sound.play();
    }


    checkCollisionsWithEnemy() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy)) {
                //console.log('collision with character, energy ', this.character.energy);
                this.character.hitEnemy();
                this.energyBar.setPercentage(this.character.energy);
                this.checkDeath();
            };
        })
    }


    checkDeath() {
        if (this.character.energy == 0) {
            console.info('you lose');
            this.showGameOverScreen();
        }
    }


    showGameOverScreen() {
        this.stopActions();
        document.getElementById('game-over-screen').classList.remove('hide');
        document.getElementById('start-btn').textContent = "NEW GAME";
        document.getElementById('start-btn').style.display = 'block';
        document.getElementById('start-btn').onclick = function () { location.reload(); };
    }


    checkCollisionsWithBottle() {
        this.level.bottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                //console.log('collision with character, bottles ', bottle);
                this.character.hitBottle();
                this.bottles.splice(index, 1);
                this.botellaBar.setPercentage(this.character.bottles);
            };
        })
    }


    checkCollisionsWithCoin() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                //console.log('collision with character, coins ', coin);
                this.character.hitCoin();
                this.coins.splice(index, 1);
                this.barraBar.setPercentage(this.character.coins);
            };
        })
    }


    checkThrowObjects() {
        if (this.keyboard.SPACE) {
            if (this.character.bottles > 0) {
                let bottle = this.createDirectionForBottle();
                if (this.character.isThrown()) {
                    this.character.lastThrow = new Date().getTime();
                    this.updateThrowableObjects(bottle);
                    this.character.bottles -= 1;
                    this.botellaBar.setPercentage(this.character.bottles);
                }
            }
        }
    }


    updateThrowableObjects(bottle){
        this.throwableObjects.pop(); //removes the last element
        this.throwableObjects.unshift(bottle); //adds a new element to an array (at the beginning), and "unshifts" older elements
    }


    checkThrowObjectsColissionWithEnemy() {
        this.level.enemies.forEach(enemy => {
            this.throwableObjects.forEach(object => {
                this.checkIfCollission(object, enemy); 
            })
        })
    }


    checkIfCollission(object, enemy){
        if (object.isColliding(enemy)) {
            //console.log('index of bottle', this.throwableObjects.indexOf(object));
            //console.log('index of enemy', this.level.enemies.indexOf(enemy));
            let hittedEnemy = this.level.enemies.indexOf(enemy);
            this.checkIfChickenHitted(hittedEnemy);
            this.checkIfEndbossHitted(hittedEnemy);
        }
    }


    checkIfChickenHitted(hittedEnemy) {
        if (this.level.enemies[hittedEnemy] instanceof Chicken) {
            this.sendEnemyToHeaven(hittedEnemy);
        }
    }


    checkIfEndbossHitted(hittedEnemy){
        if (this.level.enemies[hittedEnemy] instanceof Endboss && !this.hit) {
            this.hit = true;
            this.hitEndbossCounter = this.hitEndbossCounter-20;
            this.energyEnemyBar.setPercentage(this.hitEndbossCounter);
            console.info('Endboss hitted', this.hitEndbossCounter);
            this.level.enemies[hittedEnemy].hurtAnimation();
            if (this.hitEndbossCounter < 20) {
                this.level.enemies[hittedEnemy].deadAnimation();
            }
        }
    }


    sendEnemyToHeaven(hittedEnemy) {
        let upInterval = setInterval(() => {
            let stepUp = this.enemyHeightStep += 10;
            let currentHeight = this.level.enemies[hittedEnemy].y;
            this.level.enemies[hittedEnemy].y = currentHeight - stepUp;
            this.checkIfEnemyIsInHeaven(hittedEnemy, upInterval);
        }, 60);
    }


    checkIfEnemyIsInHeaven(hittedEnemy, upInterval){
        if (this.inHeaven(hittedEnemy)) {
            clearInterval(this.level.enemies[hittedEnemy].chickenMoveLeftInterval);
            clearInterval(this.level.enemies[hittedEnemy].chickenWalkingInterval);
            clearInterval(upInterval);
            this.enemyHeightStep = 0;
        }
    }


    inHeaven(hittedEnemy) {
        return this.level.enemies[hittedEnemy].y + this.level.enemies[hittedEnemy].height < 0;
    }


    createDirectionForBottle() {
        if (!world.character.otherDirection) {
            return new ThrowableObject(this.character.x + 100, this.character.y + 100);
        } else if (world.character.otherDirection) {
            return new ThrowableObject(this.character.x, this.character.y + 100);
        }
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //Clear at first then draw again...
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);

        // ----- Space for fixed objects
        this.ctx.translate(-this.camera_x, 0); //Back
        this.addToMap(this.energyBar);
        this.addToMap(this.energyEnemyBar);
        this.addToMap(this.barraBar);
        this.addToMap(this.botellaBar);
        this.ctx.translate(this.camera_x, 0); //Forwards

        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.addToMap(this.character);

        this.ctx.translate(-this.camera_x, 0);

        // Draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }


    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }


    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        //mo.drawFrame(this.ctx); //draw a frame around the object

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }


    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}