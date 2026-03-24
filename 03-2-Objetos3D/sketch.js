function setup(){
    createCanvas(600,400, WEBGL);
}

function draw(){
    background (255, 240, 245);
    orbitControl();
    rotateY(frameCount * 0.01);

    fill(173, 216, 230);
    stroke(135, 206, 250);

    push();
    beginShape(QUADS);

    //Cara frontal
    vertex(-80,-80,80);
    vertex(80,-80,80);
    vertex(80,80,80);
    vertex(-80,80,80);

    //Cara trasera
    vertex(-80,-80,-80);
    vertex(80,-80,-80);
    vertex(80,80,-80);
    vertex(-80,80,-80);

    //Cara superior
    vertex(-80,-80,-80);
    vertex(80,-80,-80);
    vertex(80,-80,80);
    vertex(-80,-80,80);

    //Cara inferior
    vertex(-80,80,-80);
    vertex(80,80,-80);
    vertex(80,80,80);
    vertex(-80,80,80);

    //Cara izquierda
    vertex(-80,-80,-80);
    vertex(-80,-80,80);
    vertex(-80,80,80);
    vertex(-80,80,-80);

    //Cara derecha
    vertex(80,-80,-80);
    vertex(80,-80,80);
    vertex(80,80,80);
    vertex(80,80,-80);

    

    endShape();
    pop();

    push();
    translate(0,-150,0);
    beginShape(QUADS);

    //Cara frontal
    vertex(-30,-30,30);
    vertex(30,-30,30);
    vertex(30,30,30);
    vertex(-30,30,30);

    //Cara trasera
    vertex(-30,-30,-30);
    vertex(30,-30,-30);
    vertex(30,30,-30);
    vertex(-30,30,-30);

    //Cara superior
    vertex(-30,-30,-30);
    vertex(30,-30,-30);
    vertex(30,-30,30);
    vertex(-30,-30,30);

    //Cara inferior
    vertex(-30,30,-30);
    vertex(30,30,-30);
    vertex(30,30,30);
    vertex(-30,30,30);

    //Cara izquierda
    vertex(-30,-30,-30);
    vertex(-30,-30,30);
    vertex(-30,30,30);
    vertex(-30,30,-30);

    //Cara derecha
    vertex(30,-30,-30);
    vertex(30,-30,30);
    vertex(30,30,30);
    vertex(30,30,-30);

    endShape();
    pop();

    push();
    translate(0,150,0);
    beginShape(QUADS);

    //Cara frontal
    vertex(-30,-30,30);
    vertex(30,-30,30);
    vertex(30,30,30);
    vertex(-30,30,30);

    //Cara trasera
    vertex(-30,-30,-30);
    vertex(30,-30,-30);
    vertex(30,30,-30);
    vertex(-30,30,-30);

    //Cara superior
    vertex(-30,-30,-30);
    vertex(30,-30,-30);
    vertex(30,-30,30);
    vertex(-30,-30,30);

    //Cara inferior
    vertex(-30,30,-30);
    vertex(30,30,-30);
    vertex(30,30,30);
    vertex(-30,30,30);

    //Cara izquierda
    vertex(-30,-30,-30);
    vertex(-30,-30,30);
    vertex(-30,30,30);
    vertex(-30,30,-30);

    //Cara derecha
    vertex(30,-30,-30);
    vertex(30,-30,30);
    vertex(30,30,30);
    vertex(30,30,-30);

    endShape();
    pop();

    push();
    translate(200,0,0);
    beginShape(QUADS);

    //Cara frontal
    vertex(-30,-30,30);
    vertex(30,-30,30);
    vertex(30,30,30);
    vertex(-30,30,30);

    //Cara trasera
    vertex(-30,-30,-30);
    vertex(30,-30,-30);
    vertex(30,30,-30);
    vertex(-30,30,-30);

    //Cara superior
    vertex(-30,-30,-30);
    vertex(30,-30,-30);
    vertex(30,-30,30);
    vertex(-30,-30,30);

    //Cara inferior
    vertex(-30,30,-30);
    vertex(30,30,-30);
    vertex(30,30,30);
    vertex(-30,30,30);

    //Cara izquierda
    vertex(-30,-30,-30);
    vertex(-30,-30,30);
    vertex(-30,30,30);
    vertex(-30,30,-30);

    //Cara derecha
    vertex(30,-30,-30);
    vertex(30,-30,30);
    vertex(30,30,30);
    vertex(30,30,-30);

    endShape();
    pop();

    push();
    translate(-200,0,0);
    beginShape(QUADS);

    //Cara frontal
    vertex(-30,-30,30);
    vertex(30,-30,30);
    vertex(30,30,30);
    vertex(-30,30,30);

    //Cara trasera
    vertex(-30,-30,-30);
    vertex(30,-30,-30);
    vertex(30,30,-30);
    vertex(-30,30,-30);

    //Cara superior
    vertex(-30,-30,-30);
    vertex(30,-30,-30);
    vertex(30,-30,30);
    vertex(-30,-30,30);

    //Cara inferior
    vertex(-30,30,-30);
    vertex(30,30,-30);
    vertex(30,30,30);
    vertex(-30,30,30);

    //Cara izquierda
    vertex(-30,-30,-30);
    vertex(-30,-30,30);
    vertex(-30,30,30);
    vertex(-30,30,-30);

    //Cara derecha
    vertex(30,-30,-30);
    vertex(30,-30,30);
    vertex(30,30,30);
    vertex(30,30,-30);

    endShape();
    pop();
}