//creating two rectangles

var fixedRect, movingRect;
var o1,o2,o3,o4,o5,o6;


function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(200, 200, 50, 80);
  fixedRect.shapeColor= "crimson";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor= "yellow";

  o1 = createSprite(100,600,30,30);
  o1.shapeColor= "crimson";

  o2 = createSprite(200,600,30,30);
  o2.shapeColor= "crimson";

  o3 = createSprite(300,600,30,30);
  o3.shapeColor= "crimson";

  o4 = createSprite(400,600,30,30);
  o4.shapeColor= "crimson";

  o5 = createSprite(500,200,30,30);
  o5.shapeColor= "crimson";
  o5.velocityY=3;
  
  o6 = createSprite(500,600,30,30);
  o6.shapeColor= "crimson";
  o6.velocityY= -3;
}
function draw() {
  background(255,255,255);  
  movingRect.x= World.mouseX;
  movingRect.y=World.mouseY;


  if(isTouching(movingRect, o4)){
    //the movingRect and o4 to change colors
    movingRect.shapeColor = "lime";
    o4.shapeColor = "lime";
    
  }
  else{
    movingRect.shapeColor = "crimson";
    o4.shapeColor = "crimson";
  }
  
  if(isTouching(movingRect, fixedRect)){
    //the movingRect and o4 to change colors
    movingRect.shapeColor = "lime";
    fixedRect.shapeColor = "lime";
    
  }
  else{
    movingRect.shapeColor = "crimson";
    fixedRect.shapeColor = "crimson";
  }

  bounceOff(o5,o6);

  drawSprites();
}
