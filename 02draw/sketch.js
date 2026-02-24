let x =0;
let y=0;
let velocidad = 5;
let r=20;
function setup() {
  createCanvas(400, 400);
  
 
 
 
}
 
function draw() {
  background(180);
  frameRate(900);
   circle(200,y, 40);
   circle(x, 100, 40);
   y+=velocidad;
   x+=velocidad;
    if(x>400 || x<0){
      if(y> 200 || y<0){
      
      

    velocidad=-velocidad;
   }
   //x+=3
 
 
}}