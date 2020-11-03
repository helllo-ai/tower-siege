const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var polygon

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    block8=new Box (330,235,30,40)
    block9=new Box(360,235,30,40)
    block10=new Box(390,235,30,40)
    block11=new Box(420,235,30,40)
    block12=new Box(450,235,30,40)
   polygon=Bodies.circle(50,200,20)
   World
    ground = new Ground(200,height,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}