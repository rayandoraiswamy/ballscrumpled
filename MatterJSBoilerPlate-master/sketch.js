const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,side1,middle,side2;

function preload(){
   
}

function setup() {
	createCanvas(800, 700);
 
   
	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100, 600, 10);

	ground = new Ground(400, 680, 800, 20);
 
	side1 = new Dustbin(500, 600, 20, 100);
	middle = new Dustbin(600, 700, 150, 100);
	side2 = new Dustbin(700, 600, 20, 100);


	Engine.run(engine);
 
}


function draw() {

 rectMode(CENTER);
 background(0);

 Engine.update(engine);

 paper.display();

 ground.display();

 side1.display();
 middle.display();
 side2.display();

 drawSprites();

}


 
