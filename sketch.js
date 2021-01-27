
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var world,boy;
var sling, stone;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1200,180,30);
	mango2=new mango(950,200,20);
	mango3=new mango(1000,100,30);
	mango4=new mango(1050,230,20);
	mango5=new mango(1130,140,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	stone = new Stone(200,370,20);
	sling = new Sling(stone.body,{x:230,y:410});
	Engine.run(engine);

}

function draw() {

  background(230);
  text("Press Space to get a second chance to Play!!",10,20);
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  sling.display();
  groundObject.display();
  detectCollisions(stone,mango1);
  detectCollisions(stone,mango2);
  detectCollisions(stone,mango3);
  detectCollisions(stone,mango4);
  detectCollisions(stone,mango5);	  
  
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	sling.fly();
}

function detectCollisions(lstone,lmango){
	mbodypos = lmango.body.position;
	sbodypos = lstone.body.position;

	var distance = dist(sbodypos.x,sbodypos.y,mbodypos.x,mbodypos.y);
	console.log(distance);
	console.log(lmango.r);
	console.log(lstone.r);
    if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:200,y:370});
		sling.attach(stone.body);
	}
}