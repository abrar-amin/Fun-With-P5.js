// Simple slingshot physics like in Angry Birds using Newtonian forces.
// https://editor.p5js.org/abraramin454/sketches/rWe0HjOLJ
// Click and drag on the center circle to "charge" slingshot. Then release. 
class Ball
{
  constructor(posX,posY)
  {
    this.pos = createVector(posX,posY);
    this.vel = createVector();
    this.accel = createVector();
    this.grabbed = false;
  }
  
  applyForce(force)
  {
    this.accel.add(force);
    
    
  }
  
  
  update()
  {
    this.vel.add(this.accel);
    this.pos.add(this.vel);
    
    this.accel.mult(0);
    
  }
  
  show()
  {
    circle(this.pos.x,this.pos.y,50);
    
  }
}


class SlingShot
{
  constructor(posX,posY)
  {
    this.pos = createVector(posX,posY);
    this.dragged = false;
    this.letGo = false;
  }
  
  show()
  {
    circle(this.pos.x,this.pos.y,50)
    
  }
  
  drag(ball)
  {
    let distance= dist(mouseX,mouseY,this.pos.x,this.pos.y);
    let mappedDist = map(distance,0,100, 0 ,60,true);
    if(mouseIsPressed && !this.letGo )
    {
        this.dragged = true;
        //print(degrees(atan2(mouseY-this.pos.y,mouseX-this.pos.x)));
        circle(this.pos.x+mappedDist*cos(atan2(mouseY-this.pos.y,mouseX-this.pos.x)),this.pos.y +  mappedDist*sin(atan2(mouseY-this.pos.y,mouseX-this.pos.x)),100)
      
        ballA.pos = createVector(mouseX,mouseY)
        ballA.grabbed = true;
        ballA.vel.mult(0);
    }
    
    else if(!mouseIsPressed && this.dragged && !this.letGo)  
    {
      this.letGo = true;
      let force = createVector(mouseX-this.pos.x,mouseY-this.pos.y).mult(-1);
      force.normalize();
      force.mult(mappedDist/2);
      
      ballA.grabbed = false;
      ball.applyForce(force);
    }

  }
  
}

let sling;
let ballA;
function setup() {
  createCanvas(400, 400);
  ballA = new Ball(width,height/2);
  sling = new SlingShot(width/2,height/2);
}

function draw() {
  background(220);
  sling.drag(ballA);
  sling.show()
  
  if(ballA.grabbed == false)
  {
    ballA.applyForce(createVector(0,0.2));

  }

  ballA.update();
  ballA.show();

  
}
