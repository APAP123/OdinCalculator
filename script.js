let val1 = undefined;
let val2 = undefined;
let operator = undefined;
let clearDisplay = false;

const digitContainer = document.querySelector('.digits');
const display = document.querySelector('.display');

const operatorContainer = document.querySelectorAll('.operations > button');

operatorContainer.forEach((button) => {
    button.addEventListener('click', operate);
});

function createDigits(){

    for (let i = 0; i < 10; i++) {
        const digit = document.createElement('button');
        digit.setAttribute('class', i);
        digit.textContent = i;
        digit.addEventListener('click', populateDisplay);
        digitContainer.appendChild(digit);
    }
    
}

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
    let result = parseInt(display.textContent);
    switch (operator) {
        case -1:
            return display.textContent = add(val1, result);
            break;
        case -2:
            return display.textContent = substract(val1, result);
            break;
        case -3:
            return display.textContent = multiply(val1, result);
            break;
        case -4:
            return display.textContent = divide(val1, result);
            break;
        default:
            display.textContent = "Something broke: op was" + operator;
            break;
    }
}

function populateDisplay() {
    let value = this.getAttribute('class');

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
            calculate();
            val1 = parseInt(display.textContent);
             //operator = value;
        }
        else if (value == -5){
            calculate();
        }
    }

    console.log("OP Class: " + value);
    clearDisplay = true;
}

createDigits();