const action = getAction('Hello! What do you want to do (+,-,/,*)?');
const numbers = getNumbers('Enter the numbers through the comma');
const result = calculate();
showResult();


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

function getNumbers(msg) {
    let operand;
    
    do {
        operand = prompt(msg);
    } while (operand === '' || operand === null);

    let arr = operand.split(',');

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + Number(arr[i]);
    }

    alert(sum);

    let multyply = 1;

    for (let i = 0; i < arr.length; i++) {
        multyply = multyply * Number(arr[i]);
    }

    alert(multyply);

    let divide = 1;

    for (let i = 0; i < arr.length; i++) {
        divide = Number(arr[i]) / divide;
    }

    alert(divide);

    let minus = 0;

    for (let i = 0; i < arr.length; i++) {
        minus = minus - Number(arr[i]);
    }
    
    alert(minus);    
}