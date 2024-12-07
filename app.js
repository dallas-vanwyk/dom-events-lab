
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

// I need to fucking whiteboard out this logic before cooking more function soup






/*-------------------------------- Constants --------------------------------*/

// step names - not necessary, but good for keeping track
const steps = [
    "readyForFirstOperand",
    "readyForOperator",
    "readyForSecondOperand",
    "readyForEquals",
    "displayingResult"
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



// pretty sure this is unnecessary
// let displayStr = "";
// will be written to the text content of the display div


let currentClick = "";
// will be the button NAME having been clicked on.... ?
// not currently in use 

let clickType = "";
// button TYPE clicked on
// not currently in use

/*------------------------ Cached Element References ------------------------*/

const displayObj = document.querySelector('.display');

const buttons = document.querySelectorAll('.button');

// selects all the buttons
// console.dir(buttons); // each one is a DIV...
// console.log(buttons); // it's an array?

// const calculator = document.querySelector('#calculator');
// Using querySelector and the existing calculator id, we can store a reference to our calculator.

// const numberButtons = document.querySelectorAll('.number');
// const operatorButtons = document.querySelectorAll('.operator');
// const equalsButton = document.querySelectorAll('.equals');
// const clearButton = document.querySelectorAll('.clear');


/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // currentClick = event.target.innerText;
        // clickType = event.target.classList[1]; // not a robust method
        buttonClick(event.target.classList[1], event.target.innerText);
        // console.log(event.target.className); // returns a string with both classes
        // event.target.classList.contains('number');
    });
});

// numberButtons.forEach((button) => {
//     button.addEventListener('click'), (event) => {
//         displayObj.innerText = event.target.classList;
//     }
// });




/*-------------------------------- Functions --------------------------------*/


// step change functions
const advanceStep = () => {
    step++;
    stepName = steps[step];
    console.log(stepName);
}

// clearrrrrrrr
// activate this whenever the clear button is pressed
const clearFunction = () => {
    step = 0;
    stepName = steps[step];
    displayObj.innerText = "";
}

const buttonClick = (clickType, currentClick) => {
    displayObj.innerText = clickType + " " + currentClick;
    switch (clickType) {
        case 'number':
            // number
            break;
        case 'operator':
            operator = currentClick;
            // advance step??????????????????????
            break;
        case 'equals':
            //
            break;
        default:
            console.log("invalid click type. How?")
            // ERROR AF
    }
}


// when it's on the first operand step
const firstOperandStep = () => {

}




// pretty sure this is going to be unnecessary
// const updateDisplay = () => {
//     displayObj.innerText = displayStr;
// }
// updateDisplay();

