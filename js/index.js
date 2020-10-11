game = null;

function init(){
    let gameOptions = {
        canvasId:'breakout-canvas'
    };
    game = new Game(gameOptions);
}

function restart(){
    game.gameOver(true);
    init()
}

function initPage(){
    let restartButton = document.getElementById('restart');
    restartButton.addEventListener('click',() => {
        restart();
    });
    init();
}

initPage();