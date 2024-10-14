// Simple interactive raycasting demmo with randomly generated walls.
// https://editor.p5js.org/abraramin454/sketches/tdRDaYR4a

class Particle
  {
    constructor()
    {
      this.pos = createVector(width/2,height/2);
      this.rays = [];
      
      for(let i = 0; i < 360; i++)
        {
          this.rays[i] = new Ray(this.pos,radians(i));
          
        }
      
      
    }
    show()
    {
      
      for(let i = 0; i < 360; i++)
        {
          this.rays[i].show()
          
          
        }      
      
    }
    
    rayCast(walls)
    {

      for(let i = 0; i < 360; i++)
        {

          let current;
          let record = Infinity;
          for(let wall of walls)
            {
                let result = this.rays[i].cast(wall);
                if(result)
                  {
                     if(dist(result.x,result.y,this.pos.x,this.pos.y) < record)
                      {
                        current = result;
                        record = dist(result.x,result.y,this.pos.x,this.pos.y)
                    
                      }
                    
                  }
               
              
            }
          if(current)
            {
                stroke(0,record);
                line(current.x,current.y,this.pos.x,this.pos.y);

            }
          
          
        }      
      
    }
    
    
    update(x,y)
    {
      this.pos.x = x;
      this.pos.y = y;
      
      
    }
    
    
  }


class Ray
{
  constructor(pos, degrees)
  {
    this.pos = pos;
    this.dir = createVector(cos(degrees),sin(degrees));
    
  }
  
  lookAt(x,y)
  {
    this.dir.x = x - this.pos.x;
    this.dir.y = y - this.pos.y;
    this.dir.normalize();
  }
  
  
  show()
  {
    stroke(25);
    strokeWeight(0.5);
    push();
    translate(this.pos.x,this.pos.y);
    line(0,0,this.dir.x * 10,this.dir.y *10);
    pop();
    
    
  }
  
  cast(wall)
  {
    const x1 = wall.a.x;
    const y1 = wall.a.y;
    const x2 = wall.b.x;
    const y2 = wall.b.y;

    const x3 = this.pos.x;
    const y3 = this.pos.y;
    const x4 = this.pos.x + this.dir.x;
    const y4 = this.pos.y + this.dir.y;
    
    const denom = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    if(denom ==0)
      {
        return;
      }
    
    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denom;
    const u = -1*((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / denom;
    if( t > 0 && t < 1 && u > 0)
      {
        const pt = createVector();
        pt.x = x1 + t * (x2 - x1);
        pt.y = y1 + t * (y2-y1);
        return pt;
      }
    else
      {
        return;
      }
    
    
  }
  
  
}

class Boundary
{
  constructor(x1,y1,x2,y2)
  {
    this.a = createVector(x1,y1);
    this.b = createVector(x2,y2);
    
    
  }
  
  show()
  {
    stroke(25)
    line(this.a.x,this.a.y,this.b.x,this.b.y);
    
    
  }
  
}

let b;
let p;
function setup() {
  createCanvas(400, 400);
  b = [];
  
  for(let i = 0; i < 20; i++)
    {
      b[i] = new Boundary(random(0,width),random(0,height),random(0,width),random(0,height))
      
      
    }
  
  
  p = new Particle();
}

function draw() {
  background(220);
  
  for(let boundary of b)
    {
      boundary.show();
      
      
    }
  p.show();
  p.update(mouseX,mouseY);
  p.rayCast(b);

}
