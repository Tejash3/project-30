var dustbinObj;
var ground;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
  rectMode(CENTER);
	createCanvas(1200, 600);  
  
  engine = Engine.create();
	world = engine.world;

  ground = new Ground(600,570,1200,20);
  ball=new  Ball (200,450,40,40);
  floor=new Floor(940,540,300,20);
  slingshot = new Slingshot(ball.body,{x:300, y:200});
  box1=new Box (900,503,40,50);
  box2=new Box (900,503,40,50);
  box3=new Box (900,503,40,50);
  box4=new Box (900,503,40,50);
  box5=new Box (1000,503,40,50);
  box6=new Box (1000,503,40,50);
  box7=new Box1 (875,443,40,50);
  box8=new Box1(916,443,40,50);
  box9=new Box1(958,443,40,50);
  box10=new Box1(1000,443,40,50);
  box11=new Box2(916,402,40,50);
  box12=new Box2(960,402,40,50);
  box13=new Box2(940,350,40,50);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("gray")
  Engine.update(engine);
  slingshot.display();
  ground.display();
  ball.display();
  floor.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();

 

  
  drawSprites();

}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY})
}


function mouseReleased(){
  slingshot.fly()
}
function keyPressed(){
  if(keyCode===32){
      slingshot.attach(ball.body)
          }
  }