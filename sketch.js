
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,50,700,30);
	ball1 = new Bob(200,350,50);
	ball2 = new Bob(300,350,50);
	ball3 = new Bob(400,350,50);
	ball4 = new Bob(500,350,50);
	ball5 = new Bob(600,350,50);
	rope1 = new Rope(ball3.body,roof.body,0, 0);
	rope2 = new Rope(ball2.body,roof.body,-100, 0);
	rope3 = new Rope(ball1.body,roof.body,-200, 0);
	rope4 = new Rope(ball4.body,roof.body,100, 0);
	rope5 = new Rope(ball5.body,roof.body,200, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display()
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(ball1.body, ball1.body.position,{x:750, y:-750});
		console.log("up")
	}
}


