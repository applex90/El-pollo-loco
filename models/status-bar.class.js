class StatusBar extends DrawableObject {
    percentage = 100;

    
    resolveImageIndex() {
        if (this.percentage >80) {
            return 5;
        } else if (this.percentage >60) {
            return 4;
        } else if (this.percentage >40) {
            return 3;
        } else if (this.percentage >20) {
            return 2;
        } else if (this.percentage >0) {
            return 1;
        } else {
            return 0;
        }
    }    
}