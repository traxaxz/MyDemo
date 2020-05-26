class Buttons{

    constructor(img, clicked){
        this.img = img;
        this.clicked = clicked;
        console.log(clicked);
        this.w = 20;
        this.h = 20;
        this.position = new Vector(20, 20);

    }
    styleButtons(){
        let position = this.position;
        ctx.drawImage(this.img, position.x, position.y, this.w, this.h);
    }
}