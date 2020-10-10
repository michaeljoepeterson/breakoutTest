class GameBall{
    ballx = 5;
    bally = 145;
    aX = 2;
    aY = -2;
    ballRadius = 5;
    bottomWall = 150;
    topWall = 0;
    rightWall = 300;
    leftWall = 0;
    canvas2d;
    renderInterval;
    hitPaddle = true;

    constructor(options){
        if(options){
            try{
                this.initProps(options);
            }
            catch(e){
                console.log('error ball init ',e);
            }
        }

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
        console.log('next y: ',nextY);
        if(this.bally >= this.bottomWall - elementWidth && !this.hitPaddle){
            this.bally = 1000;
            this.aY = 0;
            this.aX = 0;
        }
        this.hitPaddle = false;
    }

    renderBall = () =>{
        this.checkCollisionBall();
        console.log(this.getBallPos(),this.hitPaddle);
        this.canvas2d.beginPath();
        this.canvas2d.arc(this.ballx, this.bally, this.ballRadius, 0, Math.PI*2);
        this.canvas2d.fillStyle = "#0095DD";
        this.canvas2d.fill();
        this.canvas2d.closePath();
        this.ballx += this.aX;
        this.bally += this.aY;
    }

    moveBallLeft = (offset) => {
        this.hitPaddle = true;
        console.log('move left',this.hitPaddle);
        if(this.aY < 0){
            this.aY = -this.aY;
        }
        offset = offset ? offset : 0;
        if(this.aX < 0){
            this.aX = -this.aX;
        }
    }

    moveBallRight = (offset) =>{
        this.hitPaddle = true;
        console.log('move right',this.hitPaddle);
        if(this.aY < 0){
            this.aY = -this.aY;
        }
        offset = offset ? offset : 0;
        if(this.aX > 0){
            this.aX = -this.aX;
        }
    }

    getBallPos = () => {
        return [this.ballx,this.bally];
    }

    getBallSize = () => {
        return this.ballRadius;
    }
}