class Game{
    canvas;
    canvasId;
    canvas2d;

    constructor(options){
        try{
            const {canvasId} = options; 
            this.canvasId = canvasId;
            this.canvas = document.getElementById(this.canvasId);
            this.canvas2d = this.canvas.getContext('2d');
            this.render();
        }
        catch(e){
            console.log('error initializing game: ', e);
        }
    }

    render(){
        //start path
        this.canvas2d.beginPath();
        //shape
        this.canvas2d.rect(20, 40, 50, 50);
        //color
        this.canvas2d.fillStyle = "#FF0000";
        //fill with color
        this.canvas2d.fill();
        //attempt to draw line to close
        this.canvas2d.closePath();

        this.canvas2d.beginPath();
        this.canvas2d.arc(240, 100, 20, 0, Math.PI*2, false);
        this.canvas2d.fillStyle = "green";
        this.canvas2d.fill();
        this.canvas2d.closePath();

        this.canvas2d.beginPath();
        this.canvas2d.rect(160, 10, 100, 40);
        this.canvas2d.strokeStyle = "rgba(0, 0, 255, 0.5)";
        this.canvas2d.stroke();
        this.canvas2d.closePath();
    }
}