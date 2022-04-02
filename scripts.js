let action = getAction('Hello! What do you want to do (+,-,/,*)?');
let numberOne = getNumber('Write the first number');
let numberTwo = getNumber('Write the second number');
let result = calculate(numberOne, numberTwo, action);

showResult(numberOne, numberTwo, action, result);

function getAction(message) {
    return prompt(message);
}

function getNumber(message) {
    return +prompt(message);
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
    }
}

function showResult(numberOne, numberTwo, action, result) {
    alert(`Yuor answer: ${numberOne} ${action} ${numberTwo} = ${result}`);
}