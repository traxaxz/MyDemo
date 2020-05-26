class Rocket{
    
    constructor(image){
        this.rockets = new JsonRocketData();
     
        this.image = image;
        this.w = 6;
        this.h = 10;
        this.position = new Vector(0,0);
    }

    animate(){
        var position = this.position;

        ctx.drawImage(this.image, position.x, position.y, this.w, this.h);
    
    }

}