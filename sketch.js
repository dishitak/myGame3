
var gameState=0;
var play;

var fireballImg;
var fireball;
var spaceShip;
var bg,backgroundImg;
var bg1;
var spawnInvaders;


function preload()
{
    spaceShip=loadImage("images/destroyer.png");
    backgroundImg=loadImage("images/bgstart.jpg");
    backg=loadImage("images/bgmain.jpg")
    fireballImg=loadImage("images/fireball.png");
    bg1=loadImage("images/bgstart.jpg");
  
}

function setup()
{
    createCanvas(900,600);
    

    bg = createSprite(400,310, 900, 600)
    bg.addImage(backgroundImg)
    bg.scale =0.2;
 
    spaceShip=createSprite(400,310,40,40);
    spaceShip.shapeColor="red";

    obstaclegrp = new Group()
    
}
function draw()
{
    background(0);
    if (gameState === 0)
   {
   
    spaceShip.visible=false;
    bg.addImage(bg1);
    showinfo();
   }


  

    if (gameState === 1)
     {
       bg.visible=true;
       spaceShip.visible=true;
        play();
        
     } 
    drawSprites();
}
function play()
{
    
    bg.addImage(backg);
    bg.scale=0.4;
    bg.velocityY = 2;
    if (bg.y > 400)
     {
        bg.y = bg.y/2;
     }
  
    
     if(keyIsDown(LEFT_ARROW))
     {
         spaceShip.x = spaceShip.x - 5;
     }
     if(keyIsDown(RIGHT_ARROW))
     {
         spaceShip.x = spaceShip.x + 5;
     }
    spawnInvaders();
}

function showinfo()
{
    fill("red");
    text("PRESS SPACE TO PLAY",100,300);
    if(keyDown("SPACE"))
    {
        gameState = 1;
    }
    
}
function spawnInvaders() {
    if (frameCount % 80 === 0)
    {
        var randomx = Math.round(random(0,1000));
        var randomy = Math.round(random(0,100));
      fireball = createSprite(randomx,randomy,20,20)
      fireball.addImage(fireballImg)
      fireball.scale = 0.6;
      fireball.velocityY = 6;
      obstaclegrp.add(fireball);
    }
}