var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup(){
  createCanvas(600,600);
  tower=createSprite(300,300);
  tower.addImage("tower",towerImg)
    spookySound.loop(); 
 tower.velocityY=3;
  doorsGroup=new Group();
  climbersGroup=new Group();
  ghost=createSprite(200,200,50,50);
  ghost.addImage("ghost",ghostImg);
  ghost.scale=0.4
  invisibleBlockGroup=new Group();
}

function draw(){
  background(0);
  if (gameState==="play"){
      
      
if (tower.y>400){
    tower.y=300;
    }
      if (keyDown("left_arrow")){
      ghost.x= ghost.x -3
      }  
          if (keyDown("right_arrow")){
      ghost.x= ghost.x +3
      }
  if (keyDown("space")){
      ghost.velocityY=-5    
      }
 
    ghost.velocityY=ghost.velocityY+0.8;
  
 if (climbersGroup.isTouching(ghost)){
      ghost.velocityY=0;                        
     }  
if (ghost.isTouching( invisibleBlockGroup)||ghost.y>600||ghost.y<100){
    ghost.destroy();
  gameState="end"
    }
  
  spawnDoors();
drawSprites();
  }
  if (gameState==="end"){
   text("GAME OVER",230,250);      
      }
}
function spawnDoors(){
  
  if (frameCount%240===0){
      door=createSprite(200,0);
    door.addImage("door",doorImg);
          climber=createSprite(200,50);
    climber.addImage("climber",climberImg);
    invisibleBlock=createSprite(200,65,climber.width,2);
    
    door.velocityY=2;
    door.x=Math.round(random(120,400));
        climber.velocityY=2;
     invisibleBlock.x=door.x;
     invisibleBlock.velocityY=2;
     invisibleBlock.lifeTime=500 
    climber.x=door.x          
    ghost.depth=door.depth;
    
    ghost.depth+=1;   
    door.lifeTime=500;
    doorsGroup.add(door);
        climber.lifeTime=500;
    climbersGroup.add(climber);
     invisibleBlockGroup.add( invisibleBlock);
      //invisibleBlock.debug=true; 
    
      }
}


