function setup() {
 createCanvas(800, 500);
}
function draw() {
 background(30);
 let t = (sin(frameCount * 0.02)+1)/2;
 // posición
 let x = lerp(100, 700, t);
 // tamaño
 let s = lerp(50, 150, t);
 // color
 let r = lerp(255, 0, t);
 let b = lerp(0, 255, t);
 push();
 translate(x, 250);
 rotate(frameCount * 0.02);
 fill(r, 100, b);
 circle(0, 0, s);
 pop();
}