
function setup() {
  createCanvas(600, 400);
}
 
function draw() {
  background(220);
//Linea vertical central
  line(width/2,0,width/2,height);
//Linea horizontal central
  line(0,height/2,width,height/2);
  
  
  fill(0);
  circle(width/2,height/2,5);
  circle(10,10,10);
  circle(590,10,10);
  circle(10,390,10);
  circle(590,390,10);

rectMode(CENTER);
  noFill();
   rect(width/2,height/2, 120,80)

   circle(width/4,height/4,40);
   circle(3*width/4,height/4,40);
   circle(width/4,3*height/4,40);
   circle(3*width/4,3*height/4,40);




  

  
   
 
 
}