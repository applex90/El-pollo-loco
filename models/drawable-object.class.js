class DrawableObject {
    x = 120;
    y = 280;
    height = 150;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0;
    offset = {
        top: 40,
        left: 30,
        right: 40,
        bottom: 30
     };


    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
        catch (e) {
            console.warn('Error loading image', e);
            console.log('Could not load image', this.img.src);
        }
    }


    drawFrame(ctx) {
        if (1==0) { //this instanceof Character
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
}