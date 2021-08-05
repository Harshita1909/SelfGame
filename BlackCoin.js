class BlackCoin {
    constructor(x,y,r){
            this.x=x;
            this.y=y;
            this.radius=r;
            this.BlackCoin=createSprite(x,y,r);
            this. BlackCoinImage=loadImage("BLACK_COIN-removebg-preview.png");
    }

   
    display(){
        this.BlackCoin.addImage(this.BlackCoinImage);
        this.BlackCoin.scale=0.2; 
    }
}