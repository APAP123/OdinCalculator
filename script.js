let val1 = undefined;
let val2 = undefined;
let operator = undefined;
let clearDisplay = false;

const display = document.querySelector('.display');
const backButton = document.querySelector('.back');
const decimal = document.querySelector('.decimal');
const clear = document.querySelector('.clear');

const operatorContainer = document.querySelectorAll('.operator');
const digitsContainer = document.querySelectorAll('.digit');

operatorContainer.forEach((button) => {
    button.addEventListener('click', operate);
});

digitsContainer.forEach((button) => {
    button.addEventListener('click', populateDisplay);
});

backButton.addEventListener('click', backspace);
decimal.addEventListener('click', addDecimal);
clear.addEventListener('click', allClear);

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

function addDecimal() {
    for (let i = 0; i < display.textContent.length; i++) {
        if (display.textContent[i] == '.'){
            return; // Returns if another decimal is found to prevent multiple decimals from being entered
        }
    }

    display.textContent = display.textContent + '.';
}

function populateDisplay() {
    let value = this.textContent;

    if(display.textContent == '0') { // Clears placeholder 0
        display.textContent = '';
    }

    if(clearDisplay){
        if(val1 === undefined){
            val1 = parseFloat(display.textContent); // Store value that's currently in display
        }
        else {
            val1 = parseFloat(display.textContent);
        }
        display.textContent = value;
        clearDisplay = false;
    }
    else {
        display.textContent = display.textContent + value;
    }

    console.log("Digit Class: " + value);
}

function backspace() {
    if (display.textContent != '') {
        display.textContent = display.textContent.substring(0, display.textContent.length-1);
    }

    if(display.textContent == '') {
        display.textContent = '0';
    }

}

function allClear() {
    val1, val2, operator = undefined;
    clearDisplay = false;
    display.textContent = 0;
}

function operate() {
    let value = this.textContent;

    if (operator === undefined && value != '=') {
        val1 = parseFloat(display.textContent);
        operator = value;
    }
    else {

        if (value != '=' && !clearDisplay) {
            val2 = parseFloat(display.textContent);
            calculate();
            val1 = parseFloat(display.textContent);
            operator = value;
        }
        else if (value == '='){
            if(val2 === undefined || clearDisplay == false){
                val2 = parseFloat(display.textContent);
            }
            calculate();
            val1 = parseFloat(display.textContent);
        }
        else {
            operator = value;
        }
    }

    console.log("OP Class: " + value);
    clearDisplay = true;
}