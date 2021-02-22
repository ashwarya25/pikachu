var PLAY = 1;
var END = 0;
var gameState = PLAY;

var pikachu,pikachu1Image,pikachu2Image;
var obstacle,o1,o2,o3;
var ground;
var bg;
var charizard,charizardImage;
var blastoise,blastoiseImage;
var venusaur,venusaurImages;
var fire,fireImage,fireGroup;
var water,bubbleImage,bubbleGroup;
var leaf,leafImage,leafGroup;
var health;
function preload()
{
  bg=loadImage("bg.png");
  pikachu1Image=loadAnimation("p1.png","p2.png","p3.png","p4.png")
  pikachu2Image=loadAnimation("p1r.png","p2r.png","p3r.png","p4r.png")
  charizardImage=loadAnimation("c1.png","c2.png","c3.png","c4.png","c1.png","c1.png","c1.png","c1.png","c1.png","c1.png","c1.png","c5.png","c6.png","c7.png","c8.png","c9.png","c10.png","c11.png","c12.png","c13.png","c14.png","c15.png","c16.png","c17.png","c18.png","c19.png","c20.png","c21.png","c22.png","c23.png","c24.png","c25.png","c26.png","c27.png");
  blastoiseImage=loadAnimation("B1.png","B2.png","B3.png","B5.png","B6.png","B8.png","B9.png","B10.png","B11.png","B12.png","B13.png","B14.png","B15.png","B16.png","B17.png","B18.png","B20.png","B21.png","B22.png","B23.png","B24.png");
  venusaurImage=loadAnimation("v1.png","v2.png","v3.png","v4.png","v5.png","v6.png","v7.png","v8.png","v9.png","v10.png","v11.png","v12.png","v13.png","v14.png");
  fireImage=loadAnimation("f1.png","f2.png","f3.png","f4.png","f5.png","f6.png","f7.png");
  leafImage=loadImage("leaf.png")
  bubbleImage=loadImage("bubble.png")
}                         
function setup() 
{
  createCanvas(1350, 650);

  ground=createSprite(600,650,1350,20);
  ground.visible=false;

  pikachu=createSprite(600,640,25,30);
  pikachu.addAnimation("pikachu",pikachu1Image)
  pikachu.scale=0.2
  pikachu.shapeColor=("yellow")

  charizard=createSprite(200,50,60,40);
  charizard.addAnimation("c",charizardImage)
  charizard.scale=0.5
  charizard.velocityX=random(-10,10)

  blastoise=createSprite(100,450,50,40);
  blastoise.addAnimation("b",blastoiseImage)
  blastoise.scale=2.3;
 

  venusaur=createSprite(1200,480,50,40);
  venusaur.addAnimation("v",venusaurImage)
  venusaur.scale=1;
  health=500;

  fireGroup= new Group()
  bubbleGroup= new Group()
  leafGroup= new Group()
}

function draw() 
{
  background(bg);
  fill("black");
  textSize(35)
  text("Health:-" +health,100,100)

  
  if(keyDown("left"))
    {
      pikachu.x-=2;
      pikachu.addAnimation("pikachu",pikachu1Image)
    }
    
    if(keyDown("right"))
    {
     pikachu.x+=3;
     pikachu.addAnimation("pikachu",pikachu2Image)
    }
  

  if(charizard.x<0 || charizard.x>1350)
    {
    charizard.x=600
    }
  
  if(keyDown("space") && pikachu.y>500)
    {
      pikachu.velocityY=-10
    }
if(pikachu.isTouching(fireGroup)){
health-=15;
fireGroup.destroyEach();
}
else
if(pikachu.isTouching(bubbleGroup)){
  health-=5;
  bubbleGroup.destroyEach();
  }
else
if(pikachu.isTouching(leafGroup)){
  health-=10;
  leafGroup.destroyEach();
  }
  pikachu.velocityY=pikachu.velocityY+0.5   
  pikachu.collide(ground);

  spawnFire();
  spawnWater();
  spawnLeaf()

  drawSprites();
}
function spawnFire()
{
  if(frameCount % 30 ===0)
  {
    fire=createSprite(500,50,20,20);
      fire.addAnimation("f",fireImage);
    fire.scale=0.1
    fire.x=charizard.x-50;
    fire.shapeColor="orange";
    fire.velocityX=-2;
    fire.velocityY=6;
    fireGroup.add(fire)
  }
}
function spawnWater()
{
  if(frameCount % 40 ===0)
  {
    water=createSprite(130,280,50,40);
    water.scale=0.1
    water.x=blastoise.x+55;
    water.y=blastoise.y-30
    water.addImage(bubbleImage)
    water.velocityX=random(6,30);
    water.velocityY=random(8,40);
    bubbleGroup.add(water)
  }
}
function spawnLeaf()
{
  if(frameCount % 50 ===0)
  {
    leaf=createSprite(130,280,50,40);
    leaf.scale=0.1
    leaf.x=venusaur.x;
    leaf.y=venusaur.y-100
    leaf.addImage(leafImage)
    leaf.velocityX=random(-2,-40);
    leaf.velocityY=random(6,60);
    leafGroup.add(leaf)
  }
}