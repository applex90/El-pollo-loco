let canvas;
let world;
let keyboard = new Keyboard();


function init() {
    console.info('Startscreen');
    setEventListener();    
}

function setEventListener(){
    defineElements();
    defineEvents();
    console.log(up_element);
    console.log(left_element);
    console.log(space_element);
    console.log(right_element);
}


function defineElements(){
    up_element = document.getElementById('up-btn');
    space_element = document.getElementById('space-btn');
    left_element = document.getElementById('left-btn');
    right_element = document.getElementById('right-btn');
}


function defineEvents(){
    defineUP();
    defineSPACE();
    defineLEFT();
    defineRIGHT();
}


function defineUP(){
    up_element.addEventListener('touchstart', () => {
        keyboard.UP = true;
    });

    up_element.addEventListener('mousedown', () => {
        keyboard.UP = true;
    });
    
    up_element.addEventListener('touchend', () => {
        keyboard.UP = false;
    });
    
    up_element.addEventListener('mouseup', () => {
        keyboard.UP = false;
    });
}


function defineSPACE(){
    space_element.addEventListener('touchstart', () => {
        keyboard.SPACE = true;
    });

    space_element.addEventListener('mousedown', () => {
        keyboard.SPACE = true;
    });
    
    space_element.addEventListener('touchend', () => {
        keyboard.SPACE = false;
    });

    space_element.addEventListener('mouseup', () => {
        keyboard.SPACE = false;
    });
}


function defineLEFT(){
    left_element.addEventListener('touchstart', () => {
        keyboard.LEFT = true;
    });

    left_element.addEventListener('mousedown', () => {
        keyboard.LEFT = true;
    });
    
    left_element.addEventListener('touchend', () => {
        keyboard.LEFT = false;
    });

    left_element.addEventListener('mouseup', () => {
        keyboard.LEFT = false;
    });
}


function defineRIGHT(){
    right_element.addEventListener('touchstart', () => {
        keyboard.RIGHT = true;
    });

    right_element.addEventListener('mousedown', () => {
        keyboard.RIGHT = true;
    });
    
    right_element.addEventListener('touchend', () => {
        keyboard.RIGHT = false;
    });

    right_element.addEventListener('mouseup', () => {
        keyboard.RIGHT = false;
    });
}


function startGame() {
    removeStartElements();
    initLevel();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    console.log('My Character is', world.character);
}


function removeStartElements() {
    document.getElementById('canvas').style.backgroundImage = 'none';
    document.getElementById('start-btn').style.display = 'none';
    toggleControlBar();
}


function toggleControlBar() {
    let controlbarelements = document.getElementById('control-bar');
    controlbarelements.classList.toggle('d-none');
}


window.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 38) {
        keyboard.UP = true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
});


window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
});

