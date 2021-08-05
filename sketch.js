
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//creating sprites and bodies
var message,messageImage;
var Carrom;
var Coin,Coin1,Coin2,Coin3,Coin4;
var Bcoin1,Bcoin2,Bcoin3,Bcoin4,Bcoin;
var striker;

function preload()
{
	//loading sprite image
	messageImage=loadImage("TITLE-removebg-preview.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
message=createSprite(400,230,10,10);
message.addImage(messageImage);

	Engine.run(engine);
Carrom = new carrom (400,450,800,700);
Coin = new coin(400,450,10);
Coin1 = new coin(450,450,10);
Coin2 = new coin(400,403,10);
Coin3 = new coin(400,500,10);
Coin4 = new coin(350,450,10);
Bcoin1 = new BlackCoin(320,500,10);
Bcoin2 = new BlackCoin(340,400,10);
Bcoin3 = new BlackCoin(280,450,10);
Bcoin4 = new BlackCoin(500,450,10);
Bcoin = new BlackCoin(450,400,10)
striker = new Striker(400,580,10)
}


function draw() {
  rectMode(CENTER);
  background("green")
Carrom.display();
Coin.display();
Coin1.display();
Coin2.display();
Coin3.display();
Coin4.display();
Bcoin1.display();
Bcoin2.display();
Bcoin3.display();
Bcoin4.display();
Bcoin.display();
striker.display();
  drawSprites();
 
}
