var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground, player;
var score;
var bananaGroup, obstacleGroup;

var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {

  createCanvas(600, 600);
  
  player = createSprite(100, 340, 20, 50);
  player.addAnimation("monkey", monkey_running); 
  player.scale=0.1;
  
  ground = createSprite(400, 370, 800, 10);
  
 
   bananaGroup = new Group();
   obstacleGroup = new Group();
  
  score = 0;
  
  survivalTime = 0;
}


function draw() {
background("white");
  
  text("Score: "+ score, 500,50); 
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime= Math.ceil(frameCount/frameRate());
  text("Survival Time:"+ survivalTime, 100, 50);
  if(gameState===PLAY){
    
  ground.velocityX = -4;
  ground.x=ground.width/2;
  
  if(keyDown("space")&&player.y >=334.3) {
  player.velocityY=-6;

  }
    
    
   player.velocityY = player.velocityY + 0.1;
     player.collide(ground);
  
  
    if(gameState===END){
      ground.velocityX=0;
      player.velocityX=0;
      
      
    obstacleGroup.setVelocityEach(0);
    bananaGroup.setVelocityEach(0);
    obstacleGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);  
      
      
    }
    
    
    if(bananaGroup.isTouching(player)){
      bananaGroup.destroyEach();
      score = score+1;
      
    }
    else if(obstacleGroup.isTouching(player)){
     gameState=END;
      
      
    }
  }  
    drawSprites();
console.log(player.y);
  banana1();
  obstacle1();
}
function banana1(){
 if(World.frameCount%80===0){
  banana = createSprite(600, 120, 40, 10);
  banana.addImage(bananaImage);
  banana.y=Math.round(random(120, 200));
  banana.scale=0.1; 
  banana.velocityX = -3; 
  banana.lifetime = 200; 
   
  bananaGroup.add(banana);
 }
}
  function obstacle1(){
 if(World.frameCount%300===0){
 obstacle = createSprite(600, 340, 20, 50);
 obstacle.addImage(obstacleImage);
 obstacle.scale=0.15;
 obstacle.lifetime=300;
 obstacle.velocityX=-4; 
   
 obstacleGroup.add(obstacle);  
   
 }
    
    
}




