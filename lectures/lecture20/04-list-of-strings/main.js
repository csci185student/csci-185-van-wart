const names = [
    "Jane", "Brenda", "Wanda", "Maria", "Jasper",
    "John", "Malik", "Arjun", "Larry", "Curly", "Moe",
    "Sarah", "Ben", "Karuna", "Margaret"
];


// use a while loop to output a message for each
// item in the array:

/**
 * What do you want to repeat?
 *      output
 * HOw long do you want to repeat?
 *      11
 *      names.length
 * What do you want to chang each time?
 *      which slot is being accessed
 */

const outputElement = document.querySelector('#output');

let i = 0;
while (i < names.length) {
    outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[i]}!</p>`);
    i++;
}
// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[1]}!</p>`);
// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[2]}!</p>`);
// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[3]}!</p>`);
