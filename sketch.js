
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var roof;
var bob;
var bob2;
var bob3;
var bob4;
var bob5;
var chain1;
var chain2;
var chain3;
var chain4;
var chain5;

var bobDiameter=180;


function preload()
{
	
}

function setup() {
	createCanvas(1500,700);
	engine = Engine.create();
	world = engine.world;

	roof=new Roof(750,100,750,50);
	bob=new Bob(200,500,90)
	bob2=new Bob(290,500,90);
	bob3=new Bob(380,500,90);
	bob4=new Bob(470,500,90);
	bob5=new Bob(560,500,90);

	

	chain1=new Chain(bob.body,roof.body,-bobDiameter*2,0);
	chain2=new Chain(bob2.body,roof.body,-bobDiameter,0);
	chain3=new Chain(bob3.body,roof.body,0,0);
	chain4=new Chain(bob4.body,roof.body,bobDiameter,0);
	chain5=new Chain(bob5.body,roof.body,bobDiameter*2,0);
	
	 
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
  drawSprites();
	roof.display();
	bob.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	chain1.display();
	chain2.display()
	chain3.display();
	chain4.display();
	chain5.display();
	
}
function keyPressed() 
{ if (keyCode === UP_ARROW) { 
	Matter.Body.applyForce(bob5.body,bob5.body.position,{x:2000,y:-200});
 }
}





