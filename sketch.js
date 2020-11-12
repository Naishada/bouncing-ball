
// namespacing
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world
var object;
var ball;

//restitution

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world
  var options = {
    isStatic : true
  }
  object = Bodies.rectangle(200,390,400,30,options);
  World.add(world,object);
  var ball_options={
    restitution : 0.5
  }
  ball = Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);
  console.log(object.position.x)
}

function draw() {
  background("pink"); 
  Engine.update(engine) 
  
  rectMode(CENTER);
  circle(ball.position.x,ball.position.y,40);
  rect(object.position.x,object.position.y,400,30);
  drawSprites();
}