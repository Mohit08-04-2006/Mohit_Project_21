var bullet;
var wall;
var speed;
var weight;
var thickness;

function setup() {
  createCanvas(800,400);
  bullet = createSprite(50,200,20,5);
  bullet.shapeColor = "white";

  thickness = random(22,83);
  wall = createSprite(650,200,thickness,height/2);
  wall.shapeColor = "white";

  weight = random(30,52);
  speed = random(223,321);
 
}

function draw() {
  background(0);  
  bullet.velocityX = speed;
  
if ( collided(bullet,wall)){
  bullet.velocityX = 0;
  
}

  drawSprites();
}

