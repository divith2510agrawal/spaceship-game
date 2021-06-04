var spaceship,space,enemyship

function preload(){
spaceshipimage=loadAnimation("spaceship.png")
spaceimage=loadAnimation("space.jpg")
enemyshipimage=loadAnimation("enemy ship.png")
bulletimage=loadAnimation("bullett.png")
}

function setup() {
createCanvas(800, 650);
background1=createSprite(400,310,800,700)
background1.addAnimation("image",spaceimage)
background1.scale=5

spaceship=createSprite(350,600,30,30)
spaceship.addAnimation("image1",spaceshipimage)
spaceship.scale=0.8

}

function draw(){
background("black")

if(keyDown("LEFT_ARROW")){
spaceship.x=spaceship.x-3
}

if(keyDown("RIGHT_ARROW")){
    spaceship.x=spaceship.x+3
    }

    if(keyDown("space")){
        bullet=createSprite(spaceship.x-2,spaceship.y-30,10,20)
        bullet.addAnimation("image2",bulletimage)
        bullet.velocityY=-4
        bullet.scale=0.1
        }



    drawSprites();
}


