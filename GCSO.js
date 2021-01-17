var car,wall
var speed,weight

function setup() {
  createCanvas(1600,400);
car = createSprite(1200, 50, 50, 20);
car1 = createSprite(1200, 150, 50, 20);
car2 = createSprite(1200, 250, 50, 20);
car3 = createSprite(1200, 350, 50, 20);
speed = random(-55,-90);
speed1 = random(-55,-90);
speed2 = random(-55,-90);
speed3 = random(-55,-90);
weight = random(400,1500);
weight1 = random(400,1500);
weight2 = random(400,1500);
weight3 = random(400,1500);
wall1 = createSprite(800,200,1600,10);
wall2 = createSprite(800,100,1600,10);
wall3 = createSprite(800,300,1600,10);
inviwall = createSprite(0,50,20,40);

deform = (0.5 * weight * speed * speed) / 2;
deform1 = (0.5 * weight1 * speed1 * speed1) / 2;
deform2 = (0.5 * weight2 * speed2 * speed2) / 2;
deform3 = (0.5 * weight3 * speed3 * speed3) / 2;
}

function draw() {
  background("blue");

  if (car.x - inviwall.x < (car.width+inviwall.width)/2){
    car.velocityX = 0
    var deform = 0.5 * weight * speed * speed/22509
  if (deform>180){
    car.shapeColor= color(255,0,0)
  }
  if (deform < 180 && deform > 100){
    car.shapeColor= color(230,230,0)
  }
  if (deform < 100){
    car.shapeColor= color(0,255,0)
  }
  }

  car.collide(inviwall)

  if (car1.x - inviwall.x < (car1.width1+inviwall.width)/2){
    car1.velocityX = 0
    var deform1 = 0.5 * weight1 * speed1 * speed1/22509
  if (deform1>180){
    car1.shapeColor= color(255,0,0)
  }
  if (deform1 < 180 && deform1 > 100){
    car1.shapeColor= color(230,230,0)
  }
  if (deform1 < 100){
    car1.shapeColor= color(0,255,0)
  }
  }

  car1.collide(inviwall)

  if (car2.x - inviwall.x < (car2.width2+inviwall.width)/2){
    car2.velocityX = 0
    var deform2 = 0.5 * weight2 * speed2 * speed2/22509
  if (deform2>180){
    car2.shapeColor= color(255,0,0)
  }
  if (deform2 < 180 && deform2 > 100){
    car2.shapeColor= color(230,230,0)
  }
  if (deform2 < 100){
    car2.shapeColor= color(0,255,0)
  }
  }

  car2.collide(inviwall)

  if (car3.x - inviwall.x < (car3.width3+inviwall.width)/2){
    car3.velocityX = 0
    var deform3 = 0.5 * weight3 * speed3 * speed3/22509
  if (deform3>180){
    car3.shapeColor= color(255,0,0)
  }
  if (deform3 < 180 && deform3 > 100){
    car3.shapeColor= color(230,230,0)
  }
  if (deform3 < 100){
    car3.shapeColor= color(0,255,0)
  }
  }

  car1.collide(inviwall)

  car.velocityX = speed;
  car1.velocityX = speed1;
  car2.velocityX = speed2;
  car3.velocityX = speed3;
  wall1.shapeColor = "80,80,80" ; 
  wall2.shapeColor = "80,80,80" ;
  wall3.shapeColor = "80,80,80";
  drawSprites();
}