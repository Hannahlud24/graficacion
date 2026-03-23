function setup(){
    createCanvas(700,500, WEBGL);
}

function draw(){
    background (240);

    //FIGURA 1
    push();
    translate(-180,0,0);
    rotateY(frameCount *0.02);
    box(80);
    pop();

    //FIGURA 2
    push();
    translate(0,0,0);
    rotateX(frameCount *0.02);
    sphere(55);
    pop();

    //FIGURA 3
    push();
    translate(180,0,-100);
    rotateZ(frameCount *0.02);
    torus(50,15);
    pop();
    
}