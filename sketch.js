
var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
createCanvas(400,400);
  
monkey = createSprite(50,315,10,10);
monkey.addAnimation("running",monkey_running);
monkey.scale = 0.1;
  
ground = createSprite(400,350,900,10);
ground.velocityX = -5;
ground.x = ground.width/2; 
  
foodGroup = new Group();
obstacleGroup = new Group();
   
}

function draw() {
background("white");
fill("black");
survivalTime = Math.ceil(frameCount/frameRate());
text("Survival time:"+survivalTime,100,50);
  
bananas();
obstacles();
  
//console.log(World.frameCount);

ground.velocityX = -5;
  
if(ground.x<0){
  ground.x = ground.width/2;
}
  
if(keyDown("space")&&monkey.y > 300){
  monkey.velocityY = -17;
}

monkey.velocityY = monkey.velocityY + 0.8;
  
monkey.collide(ground);  
drawSprites();  
   
}

function bananas(){
  if(frameCount%80===0){
    banana = createSprite(400,100,10,10);
    banana.addImage("food",bananaImage);
    banana.scale = 0.1;
    banana.y = Math.round(random(120,200));
    banana.velocityX = -4;
    banana.lifetime = 300;
    
    foodGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount%300===0){
    obstacle = createSprite(400,330,10,10);
    obstacle.addImage("stone",obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -4;
    obstacle.lifetime = 300;
    
    obstacleGroup.add(obstacle);
  }
}



