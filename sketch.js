var bullet,wall;
var speed, weight, thickness;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80)
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
}

function draw() {
  background(0);  
  bullet.velocityX = speed;
  bullet.debug = true;
  wall.debug = true;

  if(Collide(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness)
     
    if(damage > 10) {
      wall.shapeColor  = color(255,0,0);
    }

    if(damage< 10){
      wall.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}
function Collide(obj1,obj2){
  obj1RightEdge = obj1.x + obj1.width;
  obj2LeftEdge =  obj2.x;
  if(obj1RightEdge >= obj2LeftEdge) 
  {
    return true;
  }
    return false;
}