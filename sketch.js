
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,wall1,wall2,wall3,ball,bin;
function preload()
{
	binImg=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);

	bin=createSprite(550,580,10,10);
	bin.addImage(binImg);
	bin.scale=0.35;


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(width/2,670,width,60);
	
	wall1=new BinWall1(550,645-10,80,10);
	wall2=new BinWall2(550+40,580,10,100);
	wall3=new BinWall3(550-40,580,10,100);

	ball=new Ball(100,600,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");

  if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body, ball.body.position, {x:1.5,y:-2.53})
  }
  if(ball.body.position.x>260){
	Matter.Body.applyForce(ball.body, ball.body.position, {x:-1.5,y:1.26})
  }

  ground.display();

  wall1.display();
  wall2.display();
  wall3.display();
  
  ball.display();

  
  drawSprites();
 
}



