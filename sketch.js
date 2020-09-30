var man,thunder;
var drops = [];
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;


function preload(){
    manI=loadImage("images/man.png");
    thunderI1=loadImage("images/1.png");
    thunderI2=loadImage("images/2.png");
    thunderI3=loadImage("images/3.png");
    thunderI4=loadImage("images/4.png");

}

function setup(){
    canvas=createCanvas(400,600);

    man=createSprite(200,500);
    man.addImage(manI);
    man.scale=0.3;

    for (var i=70; i<drops; i=i+50){
      drops.push(new Drop(random(0,400), (random(0,400))));
    }
    
    thunder=createSprite(200,50);
    thunder.addImage(thunderI1);
    thunder.scale=0.3;
}

function draw(){
    background("black");

      man.display();
  

      for (var i=0; i<drops.length; i++){
        drops[i].display();
     }

     var rand = Math.round(random(1,4));
      switch(rand){
       case 1: thunder.addImage(thunderI1);
       break;
       case 2: thunder.addImage(thunderI2);
       break;
       case 3: thunder.addImage(thunderI3);
       break;
       case 4: thunder.addImage(thunderI4);
       break;

       }

    drawSprites();

}   
