
function setup() {
  createCanvas(400, 400);
}
 
function draw() {
  background(0,100,200);
  stroke (255);
  strokeWeight(5);
  fill(255,0,0); 
  rect(100,100,200,200);

  
 
 
}
 function setup() {
  createCanvas(600, 400);
}
 
function draw() {
  background(255);
  stroke (255);
  fill(0,85,164); 
  rect(0,0,width/3,height);
  fill(255); 
  rect(width/3,0,width,height);
  fill(255,0,0); 
  rect(2*width/3,0,width/3,height);

  stroke (25,25,112);
  strokeWeight(3);
  fill(255,20,147);
  circle(100,50,50);
  fill(135,206,250);
  circle(300,50,50);
  fill(152,251,152);
  circle(500,50,50);

  noFill();
  triangle(205,200,295,100,395,200)
background(220);

  for (let x = 0; x < width; x++) {

    let c = (x / width) * 0;  // fórmula del degradado
    stroke(0,0,c);                  // color gris según x
    line(x, 0, x, height);      // línea vertical

  }
  colorMode(HSB);
for (let i = 0; i < width; i++) {
 stroke(i % 360, 100, 100);
 line(i, 0, i, height);
}


}











  


   
 
 


