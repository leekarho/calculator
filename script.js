let a;
let b;
let mathSign = '';
let displayValue = [];
let display = document.querySelector('.display');

function add(a, b) {
	return a + b
};

function subtract(a, b) {
	return a - b
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
  return a / b
};

function operate(a, b, operator) {
    switch (operator) {
      case '+':
        console.log(add(a, b));
        return add(a, b);
      case '-':
        console.log(subtract(a, b));
        return subtract(a, b);
      case '*':
        console.log(multiply(a, b));
        return multiply(a, b);
      case '/':
        console.log(divide(a, b));
        return divide(a, b);
    }
}

function calcDisplay() {
  let btn = document.querySelectorAll('.num');
  btn.forEach((number) => number.addEventListener('click', function() {
    displayValue.push(this.textContent)
    display.textContent = displayValue.join('')
  }))
  reset()
  operator()
  equals()
}

function reset() {
  let reset = document.querySelector('#reset')
  reset.addEventListener('click', function() {
    displayValue = [];
    display.textContent = 0
  })
}

function operator() {
  let operator = document.querySelectorAll('.operator')
  operator.forEach((op) => op.addEventListener('click', function() {
    a = parseFloat(displayValue);
    displayValue = [];
    mathSign = this.textContent;
  }))
}

function equals() {
  let equal = document.querySelector('.equal')
  equal.addEventListener('click', function() {
    b = parseFloat(displayValue);
    let ans = operate(a, b, mathSign)
    display.textContent = ans
  })
}

calcDisplay()