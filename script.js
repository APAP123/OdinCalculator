let val1 = undefined;
let val2 = undefined;
let operator = undefined;
let clearDisplay = false;

const display = document.querySelector('.display');

const operatorContainer = document.querySelectorAll('.operator');
const digitsContainer = document.querySelectorAll('.digit');

operatorContainer.forEach((button) => {
    button.addEventListener('click', operate);
});

digitsContainer.forEach((button) => {
    button.addEventListener('click', populateDisplay);
});

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
        case '+':
            return display.textContent = add(val1, val2);
            break;
        case '-':
            return display.textContent = substract(val1, val2);
            break;
        case '*':
            return display.textContent = multiply(val1, val2);
            break;
        case '/':
            return display.textContent = divide(val1, val2);
            break;
        default:
            display.textContent = "ERR: opcode " + operator;
            break;
    }
}

function populateDisplay() {
    let value = this.textContent;

    if(display.textContent == '0') { // Clears placeholder 0
        display.textContent = '';
    }

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
    let value = this.textContent;

    if (operator === undefined && value != '=') {
        operator = value;
    }
    else {

        if (value != '=' && !clearDisplay) {
            val2 = parseInt(display.textContent);
            calculate();
            val1 = parseInt(display.textContent);
        }
        else if (value == '='){
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