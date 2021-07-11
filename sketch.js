const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint









function preload(){
    polygonImg= loadImage("polygon.png")
    
}










function setup(){
    createCanvas(1200,700)
    engine= Engine.create()
    world= engine.world
    Engine.run(engine)
    ground= new Ground(600,680,1200,20)
    polygon= Bodies.circle(155,300,20)
    World.add(world,polygon)
    


}








function draw(){
background("black")
textSize(40);
text(mouseX+":"+ mouseY, 200,200)
imageMode(CENTER)
ground.display();
image(polygonImg,polygon.position.x,polygon.position.y,50,50)
}