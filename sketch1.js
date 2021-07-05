var spaceShip;
var gameState;
var obstacle1,obstacle2,obstacle3,obstacle4,ostacle5;
var background,background1Img,background2Img;
var ground;

function preload()
{
    obstacle1 = loadImage("images/Meteor_06.png");
    obstacle2 = loadImage("images/Meteor_02.png");
    background1Image=loadImage("images/2159.jpg")
    ground=loadImage("images/5499483.jpg")
    obstacle4 = loadImage("images/Meteor_04.png");
   
}

function setup()
{
    createCanvas(displayWidth,displayHeight);
    spaceShip = createSprite(displayWidth/2,displayHeight - 100,30,50);
    spaceShip.shapeColor = "red";
     
    ground = createSprite(0,0,600,600);
    ground.addImage(background1Image);
    ground.scale = 1.5;
 
}
function draw()
{
    background(0)
    if (gameState === 0)
    {
        spaceShip.visible = false;
        
        showinfo();
    }
    if (gameState === 1)
    {
        spaceShip.visible = true;
        play();
    }
    drawSprites();
}
function showinfo()
{
    fill ("red");
    textSize(40);
    text("Welcome to exo ship saga",displayWidth/2,100);
    textSize(20);
   
    text("PRESS SPACE TO PLAY",100,300);
    if(keyDown("SPACE"))
    {
        gameState = 1;
    }

}
function play()
{
   
        backgroundd(0)
        // plane navigation
         if(keyIsDown(UP_ARROW))
        {
            spaceShip.y = spaceShip.y - 5;
        }
        if(keyIsDown(LEFT_ARROW))
        {
            spaceShip.x = spaceShip.x - 5;
        }
        if(keyIsDown(RIGHT_ARROW))
        {
            spaceShip.x = spaceShip.x + 5;
        }
        spawnobstacles();

}//ENd of function PLAY

function spawnobstacles()
{
    var randomx = Math.round(random(displayWidth -100,displayWidth - 1000));
    var randomy = Math.round(random(0,100));

    if(frameCount % 60 === 0)
    {
        var obstacle = createSprite(randomx,randomy,20,20);
        obstacle.velocityY = 3;
        var randomObstacle = Math.round(random(1,5));
        switch (randomObstacle)
        {
            case 1 : obstacle.addImage("M1",obstacle1);
                     obstacle.scale = 0.3;
                     break;
            case 2 : obstacle.addImage("M2",obstacle2);
                     obstacle.scale = 0.3;
                     break;
            
            case 3 : obstacle.addImage("M4",obstacle4);
                     obstacle.scale = 0.3;         
                     break;
           
            default: break;
            
        }
    }
    
     
}

