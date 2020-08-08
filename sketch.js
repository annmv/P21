var bullet, wall;
var speed, weight, thickness;

function setup () {
createCanvas(1600,400);
speed = random(223,321);
weight = random(30,52);
thickness = random(22,83);
bullet = createSprite(50,200,30,10);
wall = createSprite(1500,200,thickness,height/2);
bullet.velocityX=speed;
} 

function draw() {
  background("black");
  collision (bullet,wall);
  drawSprites();
}
function collision(ob1,ob2){
  if(ob2.x - ob1.x < ob2.width/2 + ob1.width/2) {
    bullet.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation > 180)
    {
     ob2.shapeColor = color(255,0,0);
    }
    if(deformation < 180 && deformation > 100 ) 
    {
      ob2.shapeColor = color(230,230,0);
    }
    if(deformation < 100)
    {
      ob2.shapeColor = color(0,255,0);
    }
  }
}
