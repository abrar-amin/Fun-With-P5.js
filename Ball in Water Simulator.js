// Very, very simple simulation of ball falling into water.
// https://editor.p5js.org/abraramin454/sketches/xAzTHPssC

class blob
  {
    constructor()
    {
      this.pos = createVector()
      this.velocity = createVector()
      this.acceleration = createVector()
      this.prevPoints = []
      
    }
    
    applyForce(force)
    {
      
      this.acceleration.add(force)
      
      
    }
    
    
    update()
    {
      this.pos.add(this.velocity)
      this.velocity.add(this.acceleration)
      this.velocity.limit(2000)
      this.acceleration.mult(0)      
    }
    
    show(){
      
      circle(this.pos.x,this.pos.y,40)
      this.prevPoints.push(this.pos.array())

     // for(var i = 0; i < this.prevPoints.length; i++)
     //   {
        //  circle(this.prevPoints[i][0],this.prevPoints[i][1],40)
          
          
      //  }
      
      
    }
    
    
    
    checkEdges()
    {
      if(this.pos.x > width)
        {
          this.pos.x = width
          this.velocity.x *= -1
          
          
        }
      
     else if(this.pos.x < 0)
        {
          this.pos.x = 0
          this.velocity.x *= -1


          
          
        }
      
      
     if(this.pos.y > height)
      {
          this.velocity.y *= -1
          this.pos.y = height
          
      }

    }
    

  }


class liquid
  {
    
    constructor()
    {
      this.pos = createVector(0,height/2)
      this.w = width
      this.h = height/2 + 100
      
    }
    
    show()
    {
      stroke(200)
      rect(this.pos.x,this.pos.y,this.pos.x+this.w,this.pos.y+this.h)
      
      
    }
  }


let blob1;
let liquid1;
let frame;

function setup() {
  angleMode(DEGREES)
  createCanvas(400, 400);
  blob1 = new blob()
  liquid1 = new liquid()
  frame = 0
}


function dragCalculator(v)
{
  var c = .1;
  var speed = v.mag()
  var dragMagnitude = c * speed * speed 
  var drag = v.mult(-1)
  drag.normalize()
  drag.mult(dragMagnitude)
  return drag
  
  
}

function inLiquid(blob,liquid)
    {

      if(blob.pos.x >= liquid.pos.x && blob.pos.x < liquid.pos.x+liquid.w && blob.pos.y >=            liquid.pos.y)
        {                 
          return true
        }
      
      return false
      
    }


function draw() {
  background(220);
  liquid1.show()
  blob1.show()
  blob1.update()
  
  let nextPoint = createVector(20*cos(frame)+width/2,20*sin(frame) + height/2)
  
  nextPoint.sub(blob1.pos)
  nextPoint.normalize()
  nextPoint.mult(0.01)
  strokeWeight(10)
  point(nextPoint.x,nextPoint.y)
  //blob1.applyForce(createVector(0,0.1))
  blob1.applyForce(nextPoint)

  blob1.checkEdges()
  if(inLiquid(blob1, liquid1)) 
    {
      blob1.applyForce(dragCalculator(blob1.velocity.copy()))
      
    }

  
  frame = (frame + 1)%361
}
