class GamePaddle{
    canvas2d;
    canvas;
    gameBall;

    bottomWall = 150;
    topWall = 0;
    rightWall = 300;
    leftWall = 0;
    mouseIn = false;
    paddleX = 0;
    paddleY = 145;
    paddleHeight = 5;
    paddleWidth = 30;

    constructor(options){
        if(options){
            try{
                this.initProps(options);
            }
            catch(e){
                console.log('error paddle init ',e);
            }
        }
        this.initConrols()
    }

    initConrols = () => {
        this.canvas.addEventListener('mousemove',(event) => {
            this.movePaddle(event);
        });
    }

    initProps = (options) => {
        console.log(this);
        let possibleKeys = Object.keys(this);
        for(let key in options){
            let hasKey = possibleKeys.includes(key);
            if(hasKey){
                this[key] = options[key];
            }
        }
    }

    renderPaddle = () =>{
        this.canvas2d.beginPath();
        this.canvas2d.rect(this.paddleX, this.paddleY, this.paddleWidth,this.paddleHeight);
        this.canvas2d.fillStyle = "#0095DD";
        this.canvas2d.fill();
        this.canvas2d.closePath();
    }

    movePaddle = (event) => {
        console.log(event);
        let paddlePos = event.offsetX / 3.5;
        this.paddleX = paddlePos;
    }
}