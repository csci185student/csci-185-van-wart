function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    makeCreature(200,400,'yellow', 'green');
    makeCreature(1000,500,'hotpink','gray');
    makeCreature(600,400,'cyan', 'navy');
    makeCreature(1000,100,'limegreen', 'blue');
    makeCreature(1400,700, 'purple');
    makeCreature(300,50, 'orange');
    makeCreature(400,700, 'red', 'teal');

    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}

function makeCreature(x,y,fillColor, eyeColor='black') {
    
    // your creature:
    fill(fillColor)
    circle(x, y, 300)

    fill(eyeColor)
    ellipse(x - 50, y - 50, 30, 40)
    ellipse(x + 50, y - 50, 30, 40)
}

function mouseClicked(){
    makeCreature(mouseX,mouseY,'hotpink','gray')
}

function mouseDragged() {
    makeCreature(mouseX,mouseY,'cyan', 'navy');
}

