let val1 = undefined;
let val2 = undefined;
let operator = undefined;

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
        digit.addEventListener('click', operate);
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
            display.textContent = "Something broke lawl";
            break;
    }
}

function operate() {
    value = parseInt(this.getAttribute('class'));

    if(val1 === undefined && value >= 0){
        console.log("Undefined!");
        val1 = value;
        display.textContent = value;
    }
    else if(val1 !== undefined && operator === undefined && value < 0){
        console.log("operator!");
        operator = value;
    }
    else if(val2 === undefined && val1 !== undefined && operator !== undefined && value >= 0){
        val2 = value;
        display.textContent = value;
    }
    else if(val2 !== undefined && val1 !== undefined && operator !== undefined && value < 0){
        val1 = calculate();
        if(value != -5){
            operator = value;
        }
        else{
            operator = undefined;
        }
        val2 = undefined;
    }

    console.log("Class: " + value);
}

createDigits();