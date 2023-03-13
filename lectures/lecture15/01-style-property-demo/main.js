
function makeRed() {
    // your code here...
    console.log('Change background to red');
    document.querySelector('body').style.backgroundColor = '#E15554';
};

function makeBlue() {
    // your code here...
    console.log('Change background to blue');
    document.querySelector('body').style.backgroundColor = '#98A6D4';
};

function makePink() {
    // your code here...
    console.log('Change background to pink');
    document.querySelector('body').style.backgroundColor = '#FFC09F';
};

function makeOrange() {
    // your code here...
    console.log('Change background to orange');
    document.querySelector('body').style.backgroundColor = '#F76C5E';
    document.querySelector('#section1').style.backgroundColor = '#F79D65';
    document.querySelector('.my-section').style.color = 'white';
};

function clearScreen() {
    console.log('Clear all sections');
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'white';
    document.querySelector('.my-section').style.border = 'white';
}
