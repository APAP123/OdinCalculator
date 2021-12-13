let val1 = undefined;
let val2 = undefined;
let operator = undefined;
let clearDisplay = false;

// const digitContainer = document.querySelector('.digits');
const display = document.querySelector('.display');

const operatorContainer = document.querySelectorAll('.operations > button');
const digitsContainer = document.querySelectorAll('.digit');

operatorContainer.forEach((button) => {
    button.addEventListener('click', operate);
});

digitsContainer.forEach((button) => {
    button.addEventListener('click', populateDisplay);
});

// function createDigits(){

//     for (let i = 0; i < 10; i++) {
//         const digit = document.createElement('button');
//         digit.setAttribute('class', i);
//         digit.textContent = i;
//         digit.addEventListener('click', populateDisplay);
//         digitContainer.appendChild(digit);
//     }
    
// }

function add(x, y){
    return x + y;
}

function substract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function calculate() {
    console.log("Calculating with " + operator);
    console.log("val1: " + val1 + "val2: " + val2);
    switch (operator) {
        case -1:
            return display.textContent = add(val1, val2);
            break;
        case -2:
            return display.textContent = substract(val1, val2);
            break;
        case -3:
            return display.textContent = multiply(val1, val2);
            break;
        case -4:
            return display.textContent = divide(val1, val2);
            break;
        default:
            display.textContent = "Something broke: opcode " + operator;
            break;
    }
}

function populateDisplay() {
    let value = this.textContent;

    if(clearDisplay){
        if(val1 === undefined){
            val1 = parseInt(display.textContent); // Store value that's currently in display
        }
        else {
            val1 = parseInt(display.textContent);
        }
        display.textContent = value;
        clearDisplay = false;
    }
    else {
        display.textContent = display.textContent + value;
    }

    console.log("Digit Class: " + value);
}

function operate() {
    //value = parseInt(this.getAttribute('class'));
    let value = parseInt(this.getAttribute('class'));

    if (operator === undefined && value > -5) {
        operator = value;
    }
    else {
        //calculate();
        //val1 = parseInt(display.textContent);

        if (value > -5 && !clearDisplay) {
            val2 = parseInt(display.textContent);
            calculate();
            val1 = parseInt(display.textContent);
             //operator = value;
        }
        else if (value == -5){
            if(val2 == undefined){
                val2 = parseInt(display.textContent);
            }
            calculate();
            val1 = parseInt(display.textContent);
        }
    }

    console.log("OP Class: " + value);
    clearDisplay = true;
}

//createDigits();