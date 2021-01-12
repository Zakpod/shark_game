var shark, shark_move, fish;
var invisBottom, invisTop;
var f1,f2,f3, fishGroup, bottleImage, bottle, bottleGroup;
var backg; 
var score = 0, life = 5;
var gameState = 'play';
var gameOver, center;
function preload() {
  shark_move = loadAnimation("shark-1.png", "shark-2.png");
  f1 = loadImage("baby-fish-1.png");
  f2 = loadImage("baby-fish-2.png");
  f3 = loadImage("baby-fish-3.png");
  bottleImage = loadImage("bottle.png");
  backg = loadImage('background.jpg');
  gameOver = loadAnimation("0-lifes.jpg", "1-lifes.jpg", "2-lifes.jpg", "3-lifes.jpg", "4-lifes.jpg", "5-lifes.jpg");
}

function setup() {
  createCanvas(400, 400);
  invisTop = createSprite(0,0,400,5);
  invisTop.visible = false;
  invisBottom = createSprite(0,400,400,5);
  invisBottom.visible = false;
  shark = createSprite(50,200,20,20);
  shark.addAnimation("moving", shark_move);
  shark.scale = 0.1;
  bottleGroup = new Group();
  fishGroup = new Group();

}

function draw() {
  background(backg);
  

  


if (gameState === "play") {
  if (fishGroup. isTouching(shark)) {
    score++;
    fishGroup.destroyEach(1);
    }
  
    if (bottleGroup.isTouching(shark)){
      life = life - 1;
      bottleGroup.destroyEach(1);
    }

    if (keyDown(UP_ARROW)) {
    shark.velocityY = -3;
    }

    if (keyDown(DOWN_ARROW)) {
    shark.velocityY = 3;
    }

    if (life === 0 || life < 0) {
    gameState = "over";
    }
}
if (gameState === 'over') {
center = createSprite(200,200,1,1);
center.addAnimation('Game_Over', gameOver);
}
  shark.collide(invisTop);
  shark.collide(invisBottom);

  spawnFishes();
  spawnBottles();
  drawSprites();
  text("Score: "+ score, 75,368);
  text("Life: "+ life, 18,368);
}
function spawnBottles() {
  if (frameCount % 100 === 0) {
  bottle = createSprite(400,200,10,10);
  bottle.velocityX = -3;
  bottle.y = Math.round(random(10,390));
  bottle.addImage(bottleImage);
  bottleGroup.add(bottle);
  bottle.lifetime = 400;
}
}


function spawnFishes() {

  if (frameCount % 50 === 0 ) {
fish = createSprite(400,200,10,10);
fish.velocityX = -3;
fish.y = Math.round(random(10,390));
var ran = Math.round(random(1,3));
switch (ran) {

case 1: fish.addImage(f1)
break;

case 2: fish.addImage(f2)
break;

case 3: fish.addImage(f3)
break;

default: break;
}
fish.scale = 0.08;
fish.lifetime = 400;
fishGroup.add(fish);
  }

}