
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myengine
var myworld

var ball;
var bottom_ground
var leftside
var rightside



function setup() {
	createCanvas(1200,500);

	var ball_options={

		restitution:0.3,
		friction:0,
		density:1.2
		
	}




	myengine = Engine.create();
	myworld = myengine.world;

	//Create the Bodies Here.
	 ball = Matter.Bodies.circle(900,300,20,ball_options)
	bottom_ground=new Ground(600,500,1200,20)
	leftside= new Ground(1150,440,20,100)
	rightside=new Ground(1000,440,20,100)

	
	World.add(myworld,ball)

}

function keyPressed() { if(keyCode==UP_ARROW) { Matter.Body.applyForce(ball,{x:0,y:0},{x:20,y:-50}) } }



function draw() {
	background(0);
	Engine.update(myengine)

	bottom_ground.display()
	rightside.display()
	leftside.display()

	ellipseMode(RADIUS)
	ellipse(ball.position.x,ball.position.y,20,20)

	
 
  
  
  
 
}



