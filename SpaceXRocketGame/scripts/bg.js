class DrawBGImg{

    constructor(elm_w, elm_h, img){
        this.elm_w = elm_w;
        this.elm_h = elm_h;
        this.img = img;

    }
    styleBackground(){
        ctx.drawImage(this.img, 0, 0, this.elm_w, this.elm_h);
    }
}