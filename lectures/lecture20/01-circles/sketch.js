let x2 = 300;
let x3 = 500;
while (y <= 3000) {
    fill('teal')
    circle(x1, y, w);

    fill('pink')
    circle(x2, y, w);

    fill('lightblue')
    circle(x3, y, w);

    
}

function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    circle(100, 200, 50);
    circle(100, 250, 50);
    circle(100, 300, 50);
    circle(100, 350, 50);
    circle(100, 400, 50);

    drawGrid(canvasWidth, canvasHeight);
}
