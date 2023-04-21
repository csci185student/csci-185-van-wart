
function makeRed() {
    // your code here...
    console.log('Change background to red');
    document.querySelector('#section1').style.backgroundColor = '#E15554';
};

function makeBlue() {
    // your code here...
    console.log('Change background to blue');
    document.querySelector('#section2').style.backgroundColor = '#98A6D4';
};

function makePink() {
    // your code here...
    console.log('Change background to pink');
    document.querySelector('#section3').style.backgroundColor = '#FFC09F';
};

function makeOrange() {
    // your code here...
    console.log('Change background to orange');
    document.querySelector('#section4').style.backgroundColor = '#F76C5E';
    // document.querySelector('#section1').style.backgroundColor = '#F79D65';
    // document.querySelector('.my-section').style.color = 'white';
    document.querySelector('#section4').style.fontSize = '50px';
};

function clearScreen() {
    console.log('Clear all sections');
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'white';
    document.querySelector('.my-section').style.border = 'white';
}

function multicolor() {
    console.log('change all colors');
    document.querySelector('#section1').style.backgroundColor = '#98A6D4';
    document.querySelector('#section1').innerHTML = "Hello";
    document.querySelector('#section2').style.backgroundColor = '#FFC09F';
    document.querySelector('#section2').innerHTML = "there";
    document.querySelector('#section3').style.backgroundColor = '#F76C5E';
    document.querySelector('#section3').innerHTML = "friend";
    document.querySelector('#section4').style.backgroundColor = '#E15554';
    document.querySelector('#section4').innerHTML = "!";
}