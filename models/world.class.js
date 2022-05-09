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
    barraBar = new BarBarra();
    botellaBar = new BarBotella();
    throwableObjects = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }


    setWorld() {
        this.character.world = this;
    }


    run() {
        setInterval(() => {
            this.checkCollisionsWithEnemy();
            this.checkCollisionsWithBottle();
            this.checkCollisionsWithCoin();
            this.checkThrowObjects();
        }, 200);
    }



    checkCollisionsWithEnemy() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy)) {
                //console.log('collision with character, energy ', this.character.energy);
                this.character.hitEnemy();
                this.energyBar.setPercentage(this.character.energy);
            };
        })
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
                this.throwableObjects.push(bottle);
                this.character.bottles -= 1;
                this.botellaBar.setPercentage(this.character.bottles);
            }
        }
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
        this.addToMap(this.barraBar);
        this.addToMap(this.botellaBar);
        this.ctx.translate(this.camera_x, 0); //Forwards

        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);
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
        mo.drawFrame(this.ctx);

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