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

    gameRender = () =>{
        this.gameBall.renderBall();
        this.gamePaddle.renderPaddle();
        this.checkPaddleCollision();
    }

    setResizeListener = () =>{
        this.canvasHeight = this.canvas.clientHeight;
        this.canvasWidth = this.canvas.clientWidth;
    }

    checkPaddleCollision = () => {
        let ballPos = this.gameBall.getBallPos();
        let ballSize = this.gameBall.getBallSize();
        let paddlePos = this.gamePaddle.getPaddlePos();
        let paddleSize = this.gamePaddle.getPaddleSize();

        let paddleYCollision = paddlePos[1] + ballSize;
        let paddleXStart = paddlePos[0];
        let paddleXEnd = paddlePos[0] + paddleSize[0];
        if(ballPos[1] >= paddleYCollision && ballPos[0] >= paddleXStart && ballPos[0] <= paddleXEnd){
            console.log('hit paddle');
            let startDiff = Math.abs(ballPos[0]) - paddleXStart;
            let endDiff = Math.abs(ballPos[0]) - paddleXEnd;
            //send ball left
            if(startDiff <= endDiff){
                this.gameBall.moveBallLeft()
            }
            //send ball right
            else{
                this.gameBall.moveBallRight()
            }
        }
    }
}