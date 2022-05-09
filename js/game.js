let canvas;
let world;
let keyboard = new Keyboard();
let up_element, space_element, left_element, right_element;

window.addEventListener("orientationchange", function () {
    location.reload();
}, false);


function init() {
    console.info('Startscreen');
    setEventListener();
    checkOrientation()
}


function checkOrientation() {
    if (window.matchMedia("(orientation: landscape)").matches) {
        if (window.innerHeight < 480) {

            newHeight = window.innerHeight;
            document.getElementById('canvas').style.height = `${newHeight}px`;
        } else {
            document.getElementById('canvas').style.height = `100%`;
        }
    }
}


function setEventListener() {
    defineFullscreen();
    defineElements();
    defineEvents();
}


function defineFullscreen() {
    document.addEventListener("fullscreenchange", () => {
        document.getElementById('fullscreen-btn').classList.toggle('hide');
        document.getElementById('fullscreenexit-btn').classList.toggle('hide');
    });
}


function defineElements() {
    up_element = document.getElementById('up-btn');
    space_element = document.getElementById('space-btn');
    left_element = document.getElementById('left-btn');
    right_element = document.getElementById('right-btn');
}


function defineEvents() {
    defineUP();
    defineSPACE();
    defineLEFT();
    defineRIGHT();
}

function jumpUpStart(evt) {
    evt.preventDefault()
    keyboard.UP = true;
}


function jumpUpEnd(evt) {
    evt.preventDefault()
    keyboard.UP = false;
}


function spaceStart(evt) {
    evt.preventDefault()
    keyboard.SPACE = true;
}


function spaceEnd(evt) {
    evt.preventDefault()
    keyboard.SPACE = false;
}


function leftStart(evt) {
    evt.preventDefault()
    keyboard.LEFT = true;
}


function leftEnd(evt) {
    evt.preventDefault()
    keyboard.LEFT = false;
}


function rightStart(evt) {
    evt.preventDefault()
    keyboard.RIGHT = true;
}


function rightEnd(evt) {
    evt.preventDefault()
    keyboard.RIGHT = false;
}


function defineUP() {
    up_element.addEventListener('touchstart', jumpUpStart);
    up_element.addEventListener('touchend', jumpUpEnd);
    up_element.addEventListener('mousedown', jumpUpStart);
    up_element.addEventListener('mouseup', jumpUpEnd);
}


function defineSPACE() {
    space_element.addEventListener('touchstart', spaceStart);
    space_element.addEventListener('touchend', spaceEnd);
    space_element.addEventListener('mousedown', spaceStart);
    space_element.addEventListener('mouseup', spaceEnd);
}


function defineLEFT() {
    left_element.addEventListener('touchstart', leftStart);
    left_element.addEventListener('touchend', leftEnd);
    left_element.addEventListener('mousedown', leftStart);
    left_element.addEventListener('mouseup', leftEnd);
}


function defineRIGHT() {
    right_element.addEventListener('touchstart', rightStart);
    right_element.addEventListener('touchend', rightEnd);
    right_element.addEventListener('mousedown', rightStart);
    right_element.addEventListener('mouseup', rightEnd);
}


function showFullscreen() {
    let elem = document.getElementById('canvas');

    console.log(elem.requestFullscreen());
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}



function exitFullscreen() {

    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitRequestFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msRequestFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
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
    document.getElementById('game-over-screen').classList.add('hide');
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

