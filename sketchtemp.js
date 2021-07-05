var PLAY = 1
var END = 0
var gameState = PLAY


var gameOverimg
var Restartimg
var planeimg;
var alienimg
var backgimg
var edges
var score = 0
var energyimg

function preload()
 {
  //load your images here 
  planeimg = loadImage("images/destroyer.png");
  alienimg = loadImage("alien.png")
  backgimg = loadImage("Capture.JPG")
  gameOverimg = loadImage("gameOver.png")
  Restartimg = loadImage("restart.png")
  energyimg = loadImage("energy.png")

}

function setup() {
  createCanvas(500, 500);
  edges = createEdgeSprites()



  backg = createSprite(220, 210, 500, 500)
  backg.addImage(backgimg)
  backg.scale = 0.8



  plane = createSprite(250, 400, 500, 500)
  plane.addImage(planeimg)
  plane.scale = 0.7;


  plane.setCollider("rectangle", 0, -45, 20, 45)





  gameOver = createSprite(250, 200, 20, 20)
  gameOver.addImage(gameOverimg)

  Restart = createSprite(250, 250, 20, 20)
  Restart.addImage(Restartimg)
  Restart.scale = 0.5

  invaderGrp = new Group()
  energyGroup = new Group()


  gameOver.visible = false
  Restart.visible = false
  spawnInvaders()
}

function draw() {
  background("grey")
  
  if (gameState === PLAY) {
    randomnum = Math.round(random(1, 1))

    backg.velocityY = 2;
    if (backg.y > 300) {
      backg.y = height / 2;
    }
    plane.x = World.mouseX;


    if (keyDown("space")) {
      var tempenergy = spawnEnergy();
      tempenergy.addImage(energyimg);
      tempenergy.scale = 0.2;
      tempenergy.x = plane.x;
    }

    if (energyGroup.isTouching(invaderGrp)) 
    {
      invaderGrp[0].destroy()
      score = score + 1
      console.log(score)
    }


    invader.bounceOff(edges[0]);
    invader.bounceOff(edges[1]);

    if (plane.isTouching(invaderGrp)) {
      gameState = END;
    }
    spawnInvaders();
  } else if (gameState == END) {
    backg.velocityY = 0
    invaderGrp.setVelocityYEach(0)
    invaderGrp.setLifetimeEach(-1);
    gameOver.visible = true
    Restart.visible = true

  }

  if (mousePressedOver(Restart)) {
    reset();
  }

  drawSprites();
  textSize(20);
  fill("white");
  
  text("Score: " + score, 220,  50);

}


function spawnInvaders() {
  if (frameCount % 80 === 0) {
    invader = createSprite( 500, 0, 20, 20)
    invader.addImage(alienimg)
    invader.scale = 0.156
    invader.velocityY = 4
    invaderGrp.add(invader)
  }

}


function reset() {
  gameState = PLAY;
  gameOver.visible = false;
  Restart.visible = false;

  invaderGrp.destroyEach();

}


function spawnEnergy() {
  energy = createSprite(250, 400, 500, 500)
  energyGroup.add(energy)
  energy.addImage(energyimg)
  energy.scale = 0.2
  energy.velocityY = -7
  return energy;
}