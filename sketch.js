var paperObject,ground1;
var box1,box2,box3;
var crumpy;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	paperObject= new Ball(20,500,20)
	box1= new Box(495,610,20,100)
	box1.shapeColor=color("red")
	box2= new Box(595,650,200,20)
	box2.shapeColor=color("red")
	box3= new Box(695,610,20,100)
	box3.shapeColor=color("red")
	ground1= new Ground(400,690,800,20)
	ground1.shapeColor=color("purple")
	Engine.run(engine);
}


function draw() {
	background("lightblue");
   rectMode(CENTER)
   ground1.display();
   box1.display();
	box2.display();
	box3.display();
  paperObject.display();
  drawSprites();
 
}
 
function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:61,y:-61})
	}
}

