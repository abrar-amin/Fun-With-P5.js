// Simple star orbiting simulator with variable mass and variable big G constant value.
// https://editor.p5js.org/abraramin454/sketches/QVEJjhvJQ

class mover
{
  constructor(x,y,m)
  {
    this.pos = createVector(x, y);
    this.velocity = p5.Vector.random2D();
    this.velocity.mult(6);
    this.acceleration = createVector(0, 0);
    this.mass = m;
    this.r = sqrt(this.mass) * 2;
    this.prevPoints = [];
    
  }
  
  update()
  {

    this.velocity.add(this.acceleration);
    this.pos.add(this.velocity);
    this.acceleration.set(0, 0);
    
    
  }
  
  show(){
    
    
    this.prevPoints.push(this.pos.array())
    
    for(let point of this.prevPoints)
      {
        circle(point[0],point[1],sqrt(this.mass)*2)

        if(this.prevPoints.length > 5 )
          {
            this.prevPoints.shift()

            
          }
        
      }
    circle(this.pos.x,this.pos.y,sqrt(this.mass)*2)
    
  }
  
  applyForce(force)
  {
    let f = p5.Vector.div(force,this.mass)
    this.acceleration.add(f)
    
    
  }
  
  
  
}


class attractor
  {
    constructor()
    {
      this.mass = 100
      this.pos = createVector(width/2,height/2)
      this.r = sqrt(this.mass) * 2 
      this.G = 1;
    }
    
    show(){
      this.r = sqrt(this.mass) * 2 
      circle(this.pos.x,this.pos.y,this.r)
      
    }
    
    attract(mover)
    {
      let force = p5.Vector.sub(this.pos, mover.pos);
      let distanceSq = constrain(force.magSq(), 100, 1000);
      let strength = (this.G * (this.mass * mover.mass)) / distanceSq;
      force.setMag(strength);
      mover.applyForce(force);
    }
    
  }

var mover1;
var attractor1;
var movelist = [];
var slider;

function setup() {
  createCanvas(600, 600);
  
  mover1 = new mover(width/2+200,height/2,100)
  attractor1 = new attractor()
  
  for(let i = 0; i < 25; i++)
    {
      movelist[i] = new mover(random(0,width),random(0,height),random(1,20))
      
      
    }
  gravitySlider = createSlider(1, 5, 1,.1);
  gravitySlider.position(10, 10);
  gravitySlider.style('width', '80px');
  
  massSlider = createSlider(0.1, 1000, 50,.1);
  massSlider.position(10, 100);
  massSlider.style('width', '80px');
}

function mousePressed(event) {
  // Code to run that uses the event.
  
}


function draw() {
  background(220);
  attractor1.show()
  attractor1.G = gravitySlider.value();
  attractor1.mass = massSlider.value();
  textSize(32);
  
  text("Big G (Gravity constant) is " + gravitySlider.value(), 10, 60);
  text("Mass is " + massSlider.value(), 10, 160);

  
  attractor1.attract(mover1)
  mover1.update()
  mover1.show()

    for(let i = 0; i < 25; i++)
    {
        movelist[i].update()
        movelist[i].show()
        attractor1.attract(movelist[i])

      
    }
  
  attractor1.pos = createVector(mouseX,mouseY)
  

}
