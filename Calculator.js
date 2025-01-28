<<<<<<< HEAD
const display = document.getElementById("number");
function appendToDisplay(input) {
    // If 'C' is pressed, clear the display
    if (input === 'C') {
        display.value = '';
    }
    // If 'del' is pressed, remove the last character
    else if (input === 'del') {
        display.value = display.value.slice(0, -1);
    }
    // If '=' is pressed, evaluate the expression and show the result
    else if (input === '=') {
        try {
            let result = eval(display.value);
            display.value = result;  // Update display with the result
        } catch (error) {
            display.value = 'Error';  // Display error if the expression is invalid
        }
    }
    // For all other input, append it to the display
    else {
        // If a result was shown (from pressing '='), clear the display before appending new input
        if (display.value === 'Error' || !display.value) {
            display.value = '';
        }
        display.value += input;
    }
}


=======
const display = document.getElementById("number");
function appendToDisplay(input) {
    // If 'C' is pressed, clear the display
    if (input === 'C') {
        display.value = '';
    }
    // If 'del' is pressed, remove the last character
    else if (input === 'del') {
        display.value = display.value.slice(0, -1);
    }
    // If '=' is pressed, evaluate the expression and show the result
    else if (input === '=') {
        try {
            let result = eval(display.value);
            display.value = result;  // Update display with the result
        } catch (error) {
            display.value = 'Error';  // Display error if the expression is invalid
        }
    }
    // For all other input, append it to the display
    else {
        // If a result was shown (from pressing '='), clear the display before appending new input
        if (display.value === 'Error' || !display.value) {
            display.value = '';
        }
        display.value += input;
    }
}


>>>>>>> 174f88704d954096d9e4d3882aaa14aed84d87cb
