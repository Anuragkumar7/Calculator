let display = document.getElementById('display');
let expression = '';

let buttons = document.querySelectorAll('.keypad button');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    let value = button.textContent;
    
    if (value === '=') {
      calculate();
    } else if (value === 'C') {
      clearDisplay();
    } else {
      appendValue(value);
    }
  });
});


function appendValue(value) {
  expression += value;
  display.value = expression;
}

function clearDisplay() {
  expression = '';
  display.value = '';
}

function calculate() {
  try {
    let result = eval(expression);
    display.value = result;
    expression = '';
  } catch (error) {
    display.value = 'Error';
  }
}