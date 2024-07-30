const input = document.querySelector('input');
const buttons = document.querySelectorAll('.btn'); //buttons is an array containing all the buttons 

let decimalAdded = false; 

//(button) is the parameter used to represent each button element in the buttons array

//  arrow function
// the function is carried out , once for every button in the buttons array

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;

    if (buttonText === 'AC') {
      input.value = '';
      decimalAdded = false; // Reset the flag when clearing the input
    } 
    else if (buttonText === 'DEL') {
      input.value = input.value.slice(0, -1);
    }
     else if (buttonText === '=') {
      try {
        
        input.value = eval(input.value);
      } catch (error) {
        input.value = 'Error';
      }
      decimalAdded = false; // Reset the flag after the evaluation
    } 
    else {
      if (buttonText === '.') {
        // Check if a decimal point has already been added to the current number
        if (!decimalAdded) {
          input.value += buttonText;
          decimalAdded = true; // Set the flag to true after adding the decimal point
        }
      } else {
        input.value += buttonText;
        // Since we added a new digit/operator, reset the decimalAdded flag for the new number
        decimalAdded = false;
      }
    }
  });
});                                    