let tierra;

function preload() {
  tierra = loadImage("texture_earth.jpg");
}
function setup() {
  createCanvas(500, 500, WEBGL);
}

function draw() {
  background(0);
  orbitControl();
  noStroke();
  sphere(100);


}
