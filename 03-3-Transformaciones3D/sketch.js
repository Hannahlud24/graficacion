function setup(){
    createCanvas(800,500, WEBGL);
}

function draw(){
    background (255, 240, 245);
    orbitControl();
    
    //Objeto 1
    push();
    translate(-200,0,0);
    rotateY(frameCount * 0.02);
    box(80);
    pop();

    //Objeto 2
    push();
    translate(0,0,0);
    scale(1.5);
    sphere(50);
    pop();

    //Objeto 3
    push();
    translate(200,0,0);
    rotateX(frameCount * 0.02);
    torus(50,15);
    pop();

}