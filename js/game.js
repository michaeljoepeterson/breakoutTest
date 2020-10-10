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
        this.renderInterval = setInterval(this.gameRender,20);
    }

    gameRender = () =>{
        this.renderBall();
        this.ballx += this.aX;
        this.bally += this.aY;
    }

    renderBall = (x,y) => {
        x = x ? x : this.ballx;
        y = y ? y : this.bally;
        this.canvas2d.clearRect(0,0,this.canvasWidth,this.canvasHeight);
        this.canvas2d.beginPath();
        this.canvas2d.arc(x, y, 5, 0, Math.PI*2);
        this.canvas2d.fillStyle = "#0095DD";
        this.canvas2d.fill();
        this.canvas2d.closePath();
    }

    setResizeListener = () =>{
        this.canvasHeight = this.canvas.clientHeight;
        this.canvasWidth = this.canvas.clientWidth;
    }
}