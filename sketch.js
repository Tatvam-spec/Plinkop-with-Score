const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles;
var turn = 0;
var gameState = "end";

function preload() {
}

var divisionHeight = 300;

var particles = [];
var plinko = [];
var divisions = [];

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    
   // Top level
    block = new Block(390,155,30,40);
   // Second level
    block2 = new Block(420,195,30,40);
    block3 = new Block(390, 195, 30, 40);
    block4 = new Block(360,195,30, 40);
  
   
   
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);

    textSize(25);
    text("Score:-" , 50, 100 + score );


    if(gameState ==="end" ){
       textSize(30);
       text("GAME OVER", 200, 400);
}



    if(particle!== null)
{
      particles.display();
        if(particles.body.position > 760)
      {
          if(particles.body.position < 300)

          {
              score = score + 500;
              particles = null;
              if(count >= 5) gameState = "end";
          }
      }
}   

    block.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
     
}

for(var j = 0; j < particles.length; j++){
    particles[j].diplay();
}
for(var k = 0; k< divisions.length; k++){
    divisions[k].display();
}



for(var k = 0; k <= Width; k = k+80)
{
    divisions.push(new Divisions(k, height, divisionHeight/2, 10, divisionHeight))
}



for(var j  = 40; j <= Width; j=j+50)
{
    plinko.push(new Plinko(j, 75))
    
for(var j = 15; j <= Width-10; j = j+50)
{
    plinko.push(new Plinko(j, 175))
}
    
}

function mousePressed(){
    if(gameState!=="end"){
       count++;
       particle = new Particle(mouseX, 10, 10, 10);

}
}