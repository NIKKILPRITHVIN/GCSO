var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
speed=random(10,10);
weight=random(400,1500);
car=createSprite(50,200,50,50);
car.shapeColor="blue";
car.velocityX = speed;
wall=createSprite(1500,200,60,height/2);
wall.shapeColor="blue";
}

function draw() {
  background(255,255,255); 
 if(car.x-wall.x<wall.width/2+car.width/2&&
  wall.x-car.x<wall.width/2+car.width/2){
car.shapeColor="red";
wall.shapeColor="red";
 } 
 
 else{
   car.shapeColor="blue";
   wall.shapeColor="blue";
   
 }

  drawSprites();
}