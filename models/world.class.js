class World {

    character = new Character();
    level = level1;
    enemies = level1.enemies;
    clouds = level1.clouds;
    backgroundObjects = level1.backgroundObjects;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    energyBar = new BarEnergy();
    barraBar = new BarBarra();
    botellaBar = new BarBotella();


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollissions();
    }


    setWorld() {
        this.character.world = this;
    }


    checkCollissions() {
        setInterval(() => {
            this.level.enemies.forEach(enemy => {
                if(this.character.isColliding(enemy)){
                    //console.log('collision with character, energy ', this.character.energy);
                    this.character.hit();
                    this.energyBar.setPercentage(this.character.energy);
                };
                
            });
        }, 200);
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);

        // ----- Space for fixed objects
        this.ctx.translate(-this.camera_x, 0); //Back
        this.addToMap(this.energyBar);
        this.addToMap(this.barraBar);
        this.addToMap(this.botellaBar);
        this.ctx.translate(this.camera_x, 0); //Forwards

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);

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