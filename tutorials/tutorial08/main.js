function setup() {
    // Code to set up the canvas. Do not edit.
    const canvasEl = document.querySelector('#canvas-holder');
    const canvasWidth = canvasEl.offsetWidth;
    const canvasHeight = canvasEl.offsetHeight; 
    const myCanvas = createCanvas(canvasWidth, canvasHeight);
    myCanvas.parent("canvas-holder");
    background('#FFF');
}

function mouseDragged(){
    // Your job:
    // When the user drags the mouse on the canvas, you should honor
    // the color, shape, and size of the paintbrush that are selected
    // in the right-hand panel. Replace the code below with something
    // smarter:
    let fillColor = document.querySelector('#color').value;
    const size = document.querySelector('#size').value;
    const shape = document.querySelector('#shape').value;
    const opacity = document.querySelector('#opacity').value;
    const outline = document.querySelector('#outline').value;
    const smartColor = color(fillColor)
    smartColor.setAlpha(opacity)
    fill(smartColor);
    stroke(outline);
    if (shape === 'circle') {
        circle(mouseX,mouseY,size)
    } else if (shape === 'triangle') {
        triangle(
            mouseX, mouseY - size / 2, // first point
            mouseX - size / 2, mouseY + size / 2, // second point
            mouseX + size / 2, mouseY + size / 2  // third point
        )
    } else {
        square(mouseX, mouseY, size);   // x (top left), y (top left), width
    }
}



/*
// Samples:

// https://p5js.org/reference/#/p5/circle
fill('pink');
circle(mouseX, mouseY, 100);   // x, y, diameter

// https://p5js.org/reference/#/p5/square
fill('navy');
square(mouseX, mouseY, 50);   // x (top left), y (top left), width

// https://p5js.org/reference/#/p5/triangle
fill('teal');
triangle(
    50, 50, // first point
    30, 80, // second point
    70, 80  // third point
)
*/