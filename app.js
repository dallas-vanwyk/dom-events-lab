
/*------------- user stories ----------*/

// As a user, I want to be able to:
// select numbers so that I can perform operations with them.
// add two numbers together.
// subtract one number from another.
// multiply two numbers together.
// divide one number by another.
// see the output of the mathematical operation.
// clear all operations and start from 0.


/*--------------- questions -------------*/

// How do we capture the “value” when a number button is clicked?
// What steps are needed to achieve this?
// Can we use existing attributes to tie events to our number button elements?


/*---------------- notes -----------------*/



/*-------------------------------- Constants --------------------------------*/

// step names - not necessary, but nice for keeping track
const steps = [
    "awaiting first operand",
    "awaiting operator",
    "awaiting second operand",
    "awaiting equals",
    "displaying result"
]

/*-------------------------------- Variables --------------------------------*/

// equation variables
let firstOperand = 0;
let secondOperand = 0;
let operator = "";
let result = 0;

// calculation variables
let step = 0;
let stepName = steps[step];

/*------------------------ Cached Element References ------------------------*/

const displayObj = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // clickType = event.target.classList[1]; // not a robust method
        buttonClick(event.target.classList[1], event.target.innerText);
    });
});

/*-------------------------------- Functions --------------------------------*/

// step change function
const advanceStep = () => {
    step++;
    stepNamer();
}

// updates and prints the step name to the console
const stepNamer = () => {
    stepName = steps[step];
    console.log(`calculator is now ${stepName}`);
}

const buttonClick = (clickType, currentClick) => {
    // troubleshooting before other functions are built
        // displayObj.innerText = clickType + " " + currentClick;
    
    // check for and execute clearFunction
    if (currentClick === "C") {
        clearFunction();
    } else if (step === 0 && clickType === "number") {
        firstOperandStep(currentClick);
    } else if ((step === 1 || step === 2) && clickType === "operator") {
        operatorStep(currentClick);
    } else if (step === 2 && clickType === "number") {
        secondOperandStep(currentClick);
    } else if (step === 3 && clickType === "equals") {
        equalsStep();
    } else {
        console.log(`${clickType} button ${currentClick} was pressed, but calculator is currently ${stepName}.`)
    }
}

// clear button function
const clearFunction = () => {
    console.log(`clear button was pressed`);
    step = 0;
    stepNamer();
    displayObj.innerText = "";
    firstOperand = 0;
    secondOperand = 0;
    operator = "";
    result = 0;
}

// function for first operand step
const firstOperandStep = (numberInput) => {
    firstOperand = parseInt(numberInput);
    displayObj.innerText = firstOperand;
    console.log(`first operand is ${firstOperand}`);
    advanceStep();
}

// function for second operand step
const secondOperandStep = (numberInput) => {
    secondOperand = parseInt(numberInput);
    displayObj.innerText = secondOperand;
    console.log(`second operand is ${secondOperand}`);
    advanceStep();
}

// function for operator step
const operatorStep = (operatorInput) => {
    operator = operatorInput;
    displayObj.innerText = operator;
    console.log(`operator is ${operator}`);
    // advanceStep();
    step = 2;
    stepNamer();
}

const equalsStep = () => {
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        default:
            console.log(`error, operator ${operator}`);
    }
    // could probably round the result to a couple decimal places
    displayObj.innerText = result;
    console.log(`${firstOperand} ${operator} ${secondOperand} = ${result}`);
    advanceStep();
}




