var car,wall;
var speed,wieght;
var deformation;
function setup() {
  createCanvas(1600,400);
  
  speed = random(55,90);

  wieght = random(400,1500);

  car = createSprite(50,200,50,50);
  car.shapeColor = "white";
  car.velocityX = speed;

  wall = createSprite(1300,200,60,height/2);
  wall.shapeColor=color(80,80,80);

}

function draw() {
  background(0); 
  
  if(wall.x-car.x <= car.width/2+wall.width/2){
     
     car.velocityX = 0;
     deformation = 0.5 * wieght * speed * speed/22509;
    
     if(deformation>180){

        car.shapeColor ="red";
     }
 
     if(deformation<180 && deformation>100){

      car.shapeColor ="yellow";
     }

     if(deformation<100){

      car.shapeColor ="green";
     }

  }

  drawSprites();
}