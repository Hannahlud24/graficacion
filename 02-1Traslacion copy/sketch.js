let x=50,y=50;
let vx=2,vy=1;
function setup() {
 createCanvas(600, 300);

}

function draw() {
    background(242, 242, 184);

    x+=vx;
    y+=vy;

stroke(130, 243, 255)
fill(184, 236, 242)
rect(x,y,120,80,50);

}
