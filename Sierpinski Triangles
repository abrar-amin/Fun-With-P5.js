// Sierpinski Triangle generator using recursion.
// https://editor.p5js.org/abraramin454/sketches/XYi5S2g13
// Drag the slider to increase number of of triangles.

var limit;
class Tri
{
  constructor(point1,point2,point3)
  {
    this.point1 = point1;
    this.point2 = point2;
    this.point3 = point3;
    
    
  }
  
  show()
  {
    triangle(this.point1.x,this.point1.y,this.point2.x,this.point2.y,this.point3.x,this.point3.y);
  }
}


function fractal(tri1, iter)
{
  if(iter < limit)
  {
     let newMid1 = createVector((tri1.point1.x + tri1.point3.x)/2,(tri1.point1.y + tri1.point3.y)/2)
  let newMid2 = createVector((tri1.point2.x + tri1.point3.x)/2,(tri1.point2.y + tri1.point3.y)/2)
  let newMid3 = createVector((tri1.point1.x + tri1.point2.x)/2,(tri1.point1.y + tri1.point2.y)/2)
  let tria = new Tri(newMid1,newMid2,newMid3)
  
  tria.show();
  
  /*let newLeftTriPos1 = createVector((tri1.point1.x + tria.point1.x)/2,(tri1.point1.y + tria.point1.y)/2 )
  let newLeftTriPos2 = createVector((tria.point1.x +tria.point3.x  )/2,(tria.point1.y +tria.point3.y )/2 );
  let newLeftTriPos3 = createVector((tri1.point1.x + tria.point3.x)/2,(tri1.point1.y + tria.point3.y)/2 );*/
  let newLeftTriPos1 = createVector(tri1.point1.x,tri1.point1.y);
  let newLeftTriPos2 = createVector(tria.point3.x,tria.point3.y);
  let newLeftTriPos3 = createVector(tria.point1.x,tria.point1.y);
    
  let newRightTriPos1 = createVector(tria.point3.x,tria.point3.y);
  let newRightTriPos2 = createVector(tri1.point2.x,tri1.point2.y);
  let newRightTriPos3 = createVector(tria.point2.x,tria.point2.y);
    
  let newTopTriPos1 = createVector(tria.point1.x,tria.point1.y);
  let newTopTriPos2 = createVector(tria.point2.x,tria.point2.y);
  let newTopTriPos3 = createVector(tri1.point3.x,tri1.point3.y);
    
  let triLeft = new Tri(newLeftTriPos1,newLeftTriPos2,newLeftTriPos3)
  triLeft.show()
  let triRight = new Tri(newRightTriPos1,newRightTriPos2,newRightTriPos3)

  let triTop = new Tri(newTopTriPos1,newTopTriPos2,newTopTriPos3)

  fractal(triTop, iter +1 );
  fractal(triRight, iter +1 );
  fractal(triLeft, iter +1 );


  }
  
}

let tri1;
let slider;
function setup() {
  createCanvas(400, 400);
  tri1 = new Tri(createVector(0,height),createVector(width/2,0),createVector(width,height));
  slider = createSlider(0, 8, 0);
  limit = 0;
}

function draw() {
  background(220);
  tri1.show();
  fractal(tri1,0);
  limit = slider.value();


}
