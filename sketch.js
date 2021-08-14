const Engine=Matter.Engine;
const World = Matter.World;
const Bodies=Matter.Bodies;

var engine,world,bg;
var s1=[]
function preload(){
bg=loadImage("snow3.jpg")


}

function setup() {
 engine=Engine.create();
 world=engine.world;
  createCanvas(800,400);
 
}

function draw() {
  background(bg);
  Engine.update(engine) ;
  if(frameCount%30===0) {
s1.push(new Snow(random(10,760),20,10));


  }
  for(var i=0;i<s1.length;i++){
    s1[i].display();


  }
  drawSprites();
}