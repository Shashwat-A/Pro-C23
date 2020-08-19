const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var pack_options,ground_options,heli_options;
var helicopter,helIMG;
var package,packageIMG;
var side1,side2,side3;

function preload() {
	helIMG = loadImage("helicopter.png");
	packageIMG = loadImage("package.png");
}

function setup() {
	var canvas = createCanvas(800,1000);
	engine = Engine.create();
    world = engine.world;

	pack_options = {
		'isStatic' : true,
		'restitution' : 0.8,
		'friction' : 1.0
	}

	heli_options = {
		'isStatic' : true
	}

	ground_options = {
		'isStatic' : true,
		'friction' : 1.0
	}

	ground = new Ground(400, 950);

	package = Bodies.rectangle(200,200,50,50, pack_options);

	helicopter = new Helicopter();

	side1 = new Box(190,885,20,100);
	side2 = new Box(410,885,20,100)
	side3 = new Box(300,925,200,20);

	package = new Package();
}

function draw() {
    background("black");
    Engine.update(engine);

	ground.display();
	package.display();
	helicopter.display();
	side1.display();
	side2.display();
	side3.display();
	package.drop();
}



