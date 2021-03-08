const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer;
var ground;
var stone;
var rubber;
var sands;
var iron;

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  ground = new Plane(400, 700);
  hammer = new Hammer(0, 0);
  stone = new Stone(200, 350, 100, 100);
  rubber = new Rubber(400, 350);

  sands = [];
  var maxGrains = 25;
  for (let i = 0; i < maxGrains; i++) {
    sands.push(
      new Sand(Math.round(random(25, 775)), Math.round(random(25, 125)))
    );
  }

  iron = new Iron(400, 475, 50, 25);

  Engine.run(engine);
}

function draw() {
  background(160, 219, 229);

  hammer.body.position.x = mouseX;
  hammer.body.position.y = mouseY;
  ground.display();
  hammer.display();
  stone.display();
  rubber.display();

  for (let i = 0; i < sands.length; i++) {
    sands[i].display();
  }

  iron.display();
}
