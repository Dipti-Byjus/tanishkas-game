var bg,bg2,form,system,code,security;
var score=0;
var gameState="level1"
var a
function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
  a=createSprite(200,200)
  a.visible=false
}

function draw() {
  if(gameState=="level1"){
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
  gameState="level2"
  }
  if(gameState=="level2"){
  if(score === 3) {
    clear()
    background(bg2)
    a.visible=true
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
    
    if(mousePressedOver(a)){
gameState="level3"
    }
  }
}
if(gameState=="level3"){
  a.visible=false
  clear()
  background(bg)
  text("level3",250,200)
  var b=createSprite(200,200,200,200)
b.velocityX=4  
}
  drawSprites()
}