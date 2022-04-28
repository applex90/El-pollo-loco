let canvas;
let world;
let keyboard = new Keyboard();

function init(){
    console.info('Startscreen');
}


function startGame() {
    removeStartElements();
    initLevel();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    console.log('My Character is', world.character);
}


function removeStartElements(){
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
    if (e.keyCode == 40) {
        keyboard.DOWN= true;
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
    if (e.keyCode == 40) {
        keyboard.DOWN= false;
    }
});