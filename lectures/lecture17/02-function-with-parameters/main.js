
// the old, ineffcient way!

function makeRed() {
   document.querySelector('body').style.backgroundColor = 'red';
}

function makeBlue() {
    document.querySelector('body').style.backgroundColor = 'blue';
}

function makeGreen() {
    document.querySelector('body').style.backgroundColor = '#59FFA0';
}

function makeOrange() {
    document.querySelector('body').style.backgroundColor = 'orange';
}

function makePink() {
    document.querySelector('body').style.backgroundColor = 'hotpink';
}

function makeBlack() {
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('ul').style.color = 'white';
}

function makeBlack() {
    document.querySelector('body').style.backgroundColor = 'black';
}

// save space!! making parameters, you just need this function not the rest above.

function changeColor(bgcolor, textcolor, textsize) {
    document.querySelector('body').style.backgroundColor = bgcolor;
    document.querySelector('body').style.color = textcolor;
    document.querySelector('body').style.fontSize = textsize;
}


