
var canvas;
var music;
var box;
var surface1,surface2,surface3,surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    //create 4 different surfaces
     surface1=createSprite(60,580,200,10)
     surface1.shapeColor="blue"
     surface2=createSprite(270,580,200,10)
     surface2.shapeColor="yellow"
     surface3=createSprite(480,580,200,10)
     surface3.shapeColor="red"
     surface4=createSprite(690,580,200,10)
     surface4.shapeColor="green"
     
    //create box sprite and give velocity
     box=createSprite(50,150,20,20)
     box.shapeColor="white"
      box.velocityX=2;
     box.velocityY=2;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   edges= createEdgeSprites();
    box.bounceOff(edges)
     
     drawSprites();
     



    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1) ){
        box.shapeColor="blue"
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2) ){
        box.shapeColor="yellow"
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3) ){
        box.shapeColor= "red"
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4) ){
        box.shapeColor="green"
    }



















}
