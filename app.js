
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






/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

const buttons = document.querySelectorAll('.button'); // selects all the buttons
// console.dir(buttons); // each one is a DIV...
// console.log(buttons); // it's an array?

// const calculator = document.querySelector('#calculator');
// Using querySelector and the existing calculator id, we can store a reference to our calculator.

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // This log is for testing purposes to verify we're getting the correct value
        console.log(event.target.innerText);
        // Future logic to capture the button's value would go here...
    });
});






/*-------------------------------- Functions --------------------------------*/


