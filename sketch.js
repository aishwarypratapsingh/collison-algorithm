var fixedRect, movingRect,rect1,rect2,rect3,rect4;
var object1, object2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1=createSprite(200,100,50,80);
  rect1.shapeColor="green";

  rect2=createSprite(300,100,50,80);
  rect2.shapeColor="green";

  rect3=createSprite(500,100,50,80);
  rect3.shapeColor="green";

  rect4=createSprite(700,100,50,80);
  rect4.shapeColor="green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect,rect4)){      //true    
  rect4.shapeColor = "blue";
  movingRect.shapeColor = "blue";

 }
 else    //false
 {
  rect4.shapeColor = "green";
  movingRect.shapeColor = "green";
 }
 
  drawSprites();
}

function isTouching(object1, object2){     //two arguments
  if (object1.x - object2.x < object1.width/2 + object2.width/2         //true 
    && object2.x - object1.x < object1.width/2 + object2.width/2
    && object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object1.height/2 + object2.height/2) {
  

  return true;
}
else {     //false
  

  return false;
}

}