class Game{
    canvas;
    canvasId;
    canvas2d;
    renderInterval;
    canvasHeight;
    canvasWidth;
    gameBall;
    gamePaddle

    ballx = 5;
    bally = 145;
    aX = 2;
    aY = -2;
    ballRadius = 5;
    bottomWall = 150;
    topWall = 0;
    rightWall = 300;
    leftWall = 0;
    paddleX = 0;
    paddleY = 145;
    paddleHeight = 5;
    paddleWidth = 30;

    constructor(options){
        try{
            const {canvasId} = options; 
            this.canvasId = canvasId;
            this.canvas = document.getElementById(this.canvasId);
            this.canvas2d = this.canvas.getContext('2d');
            this.gameBall = new GameBall({
                canvas2d: this.canvas2d,
                ballx:this.ballx,
                bally: this.bally,
                aX: this.aX,
                aY: this.aY,
                ballRadius: this.ballRadius,
                bottomWall: this.bottomWall,
                topWall: this.topWall,
                rightWall: this.rightWall,
                leftWall: this.leftWall
            });
            this.gamePaddle = new GamePaddle({
                canvas2d: this.canvas2d,
                canvas:this.canvas,
                bottomWall: this.bottomWall,
                topWall: this.topWall,
                rightWall: this.rightWall,
                leftWall: this.leftWall,
                paddleX: this.paddleX,
                paddleY: this.paddleY,
                paddleHeight: this.paddleHeight,
                paddleWidth: this.paddleWidth

            });
            this.init();
        }
        catch(e){
            console.log('error initializing game: ', e);
        }
    }

    init = () =>{
        this.setResizeListener();
        this.renderInterval = setInterval(() => {
            this.canvas2d.clearRect(0,0,this.canvasWidth,this.canvasHeight);
            this.gameRender();
        },20);
    }

    // initConrols = () => {
    //     this.canvas.addEventListener('mousemove',(event) => {
    //         this.movePaddle(event);
    //     });
    // }

    gameRender = () =>{
        this.gameBall.renderBall();
        this.gamePaddle.renderPaddle();
    }


    // renderPaddle = () =>{
    //     this.canvas2d.beginPath();
    //     this.canvas2d.rect(this.paddleX, this.paddleY, this.paddleWidth,this.paddleHeight);
    //     this.canvas2d.fillStyle = "#0095DD";
    //     this.canvas2d.fill();
    //     this.canvas2d.closePath();
    // }

    // movePaddle = (event) => {
    //     console.log(event);
    //     let paddlePos = event.offsetX / 3.5;
    //     this.paddleX = paddlePos;
    // }
    

    setResizeListener = () =>{
        this.canvasHeight = this.canvas.clientHeight;
        this.canvasWidth = this.canvas.clientWidth;
    }
}