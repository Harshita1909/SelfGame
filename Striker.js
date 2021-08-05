class Striker {
    constructor(x,y,r){
            this.x=x;
            this.y=y;
            this.radius=r;
            this.Striker=createSprite(x,y,r);
            this. StrikerImage=loadImage("CHECKER-removebg-preview.png");
    }

   
    display(){
        this.Striker.addImage(this.StrikerImage);
        this.Striker.scale=0.2; 
    }
}