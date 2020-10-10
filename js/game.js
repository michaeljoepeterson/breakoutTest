class Game{
    canvas;
    canvasId;
    canvas2d;
    renderInterval;
    canvasHeight;
    canvasWidth;
    ballx = 5;
    bally = 145;
    aX = 2;
    aY = -2;
    ballRadius = 5;
    bottomWall = 150;
    topWall = 0;
    rightWall = 300;
    leftWall = 0;
    mouseIn = false;
    paddleX = 0;
    paddleY = 145;
    paddleHeight = 5;
    paddleWidth = 30;
    //mouseOffset = 100;

    constructor(options){
        try{
            const {canvasId} = options; 
            this.canvasId = canvasId;
            this.canvas = document.getElementById(this.canvasId);
            this.canvas2d = this.canvas.getContext('2d');
            this.init();
        }
        catch(e){
            console.log('error initializing game: ', e);
        }
    }

    init = () =>{
        this.setResizeListener();
        this.initConrols();
        this.renderInterval = setInterval(() => {
            this.canvas2d.clearRect(0,0,this.canvasWidth,this.canvasHeight);
            this.gameRender();
            this.renderPaddle();
        },20);
    }

    initConrols = () => {
        this.canvas.addEventListener('mousemove',(event) => {
            this.movePaddle(event);
        });
    }

    gameRender = () =>{
        this.renderBall();
        this.ballx += this.aX;
        this.bally += this.aY;
    }

    renderBall = (x,y) => {
        x = x ? x : this.ballx;
        y = y ? y : this.bally;
        this.checkCollisionBall();
        this.canvas2d.beginPath();
        this.canvas2d.arc(x, y, this.ballRadius, 0, Math.PI*2);
        this.canvas2d.fillStyle = "#0095DD";
        this.canvas2d.fill();
        this.canvas2d.closePath();
    }

    renderPaddle = () =>{
        //this.checkCollision(this.paddleWidth);
        this.canvas2d.beginPath();
        this.canvas2d.rect(this.paddleX, this.paddleY, this.paddleWidth,this.paddleHeight);
        this.canvas2d.fillStyle = "#0095DD";
        this.canvas2d.fill();
        this.canvas2d.closePath();
    }

    movePaddle = (event) => {
        console.log(event);
        let paddlePos = event.offsetX / 3.5;
        this.paddleX = newPos
    }

    checkCollisionBall = (elementWidth) =>{
        elementWidth = elementWidth ? elementWidth : this.ballRadius;
        let nextY = this.bally + this.aY;
        let nextX = this.ballx + this.aX;

        //top/bottom of canvas
        if(nextY < this.topWall + elementWidth || nextY > this.bottomWall - elementWidth){
            this.aY = -this.aY;
        }

        if(nextX > this.rightWall - elementWidth || nextX < this.leftWall + elementWidth){
            this.aX = -this.aX;
        }

    }

    setResizeListener = () =>{
        this.canvasHeight = this.canvas.clientHeight;
        this.canvasWidth = this.canvas.clientWidth;
    }
}