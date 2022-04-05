const action = getAction('Hello! What do you want to do (+,-,/,*)?');
const numberOne = getNumber('Write the first number');
const numberTwo = getNumber('Write the second number');

const result = calculate(numberOne, numberTwo, action);
showResult(numberOne, numberTwo, action, result);

function getAction() {
    let op = prompt('Hello! What do you want to do (+,-,/,*)?');

    while (isActionInvalid(op)) {
        op = prompt('Wrong action! Try again.');
    }
    return op;
}

function isActionInvalid(value) {
    return value !== '+' && value !== '-' && value !== '/' && value !== '*';
}

function getNumber(msg) {
    let operand;

    do {
        operand = prompt(msg);
    } while (isNumberInvalid(operand));

    return +operand;
}

function isNumberInvalid(value) {
    return isNaN(value) || value === '' || value === null;
}

function calculate(numberOne, numberTwo, action) {
    switch (action) {
        case "+":
            return numberOne + numberTwo;
        case "-":
            return numberOne - numberTwo;
        case "/":
            return numberOne / numberTwo;
        case "*":
            return numberOne * numberTwo;
        default:
            alert('Wrong symbol! Try again.');
            return null;
    }
}

function showResult(numberOne, numberTwo, action, result) {
    alert(`Yuor answer: ${numberOne} ${action} ${numberTwo} = ${result}`);
}
