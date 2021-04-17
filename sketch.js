const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var object;
var ground;


function setup() {
  var canvas = createCanvas(400,400);
engine = Engine.create();
world = engine.world;
var obj_options = {
  restitution:1.0
}
var ground_options = {
  isStatic:true
}
object = Bodies.rectangle(200,100,50,50,obj_options);
ground = Bodies.rectangle(200,390,200,20,ground_options);
World.add(world,object);
World.add(world,ground)
console.log(object);
console.log(object.type);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50)
rect(ground.position.x,ground.position.y,400,20)

  drawSprites();
}