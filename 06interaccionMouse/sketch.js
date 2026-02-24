function setup() {
 createCanvas(400, 400);

}

function draw() {
 background(240);
 
 circle(mouseX,mouseY,30);
}
 function mousePressed(){
  background(random(255),random(255),random(255));
 }
