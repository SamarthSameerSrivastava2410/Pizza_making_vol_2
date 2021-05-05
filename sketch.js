var gameState 


function preload(){

  backgroundIMG = loadImage("images/background.png");
  buttonIMG = loadImage("images/buttons.png");
  boardIMG = loadImage("images/board.jpg");
  baseAnimation = loadAnimation("images/pda/1.png", "images/pda/2.png", "images/pda/3.png", "images/pda/4.png", 
  "images/pda/5.png", "images/pda/6.png", "images/pda/7.png", "images/pda/8.png", "images/pda/9.png" ,
  "images/pda/10.png", "images/pda/11.png", "images/pda/12.png", "images/pda/13.png", "images/pda/14.png", "images/pda/15.png");
  baseStillAni = loadAnimation("images/pda/15.png")

}



function setup(){
  Sframe = frameCount
  createCanvas(1200,900);
  gameState = "shop"


  playButton = createSprite(600, 550, 20, 20);
  playButton.addImage("button", buttonIMG);

  dough = createSprite(515, 525, 20, 20);
  dough.addAnimation("base", baseAnimation);
  dough.addAnimation("still", baseStillAni);
  dough.scale = 0.5
  dough.visible = false;
}

function draw() {
  background(backgroundIMG); 

  if(mousePressedOver(playButton)){
    gameState = "play";
  }

  if(gameState === "shop"){

    push();
      textSize(70);
      fill("black");
      textFont("Lucida Handwriting")
      text("PIZZA MAKING", 400, 350)
    pop();

  }

  if (gameState === "play"){
    frame = frameCount;
    console.log(frame)
    background(boardIMG);
    playButton.destroy();
    dough.visible = true;
    if(frame > 51){
      dough.changeAnimation("still", baseStillAni);
      frame = 53

    }
  }
  
  drawSprites();

  
  
}