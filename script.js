let a;
let b;
let result = 0;
let mathSign = '';
let displayValue = [0];
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
        return add(a, b);
      case '-':
        return subtract(a, b);
      case '*':
        return multiply(a, b);
      case '/':
        return divide(a, b);
    }
}

function calcDisplay() {
  let btn = document.querySelectorAll('.num');
  btn.forEach((number) => number.addEventListener('click', function() {
    displayValue.push(this.textContent);
    display.textContent = parseFloat(displayValue.join(''));
  }));
  reset();
  operator();
  equals();
}

function operator() {
  let operator = document.querySelectorAll('.operator')
  operator.forEach((op) => op.addEventListener('click', function() {
    if (a == undefined) {
      a = parseFloat(displayValue.join(''));
      displayValue = [0];
      mathSign = this.textContent;
    } else {
      b = parseFloat(displayValue.join(''));
      result = operate(a, b, mathSign);
      display.textContent = result;
      a = result;
      mathSign = this.textContent;
      displayValue = [0];
      console.log(`a: ${a}`)
      console.log(`b: ${b}`)
      console.log(result)
      console.log(mathSign)
    }
  }))
}

function equals() {
  let equal = document.querySelector('.equal')
  equal.addEventListener('click', function() {
    if (a == undefined) {
      display.textContent = parseFloat(displayValue.join(''))
    } else {
      b = parseFloat(displayValue.join(''));
      result = operate(a, b, mathSign)
      display.textContent = result
      a = result;
      if (mathSign == '*') {
        displayValue = [1]
      } else {
        displayValue = [0]
      }
      console.log(`a: ${a}`)
      console.log(`b: ${b}`)
      console.log(mathSign)
    }
  })
}

function reset() {
  let reset = document.querySelector('#reset')
  reset.addEventListener('click', function() {
    displayValue = [0];
    display.textContent = 0;
    result = 0;
    a = undefined;
    b = undefined;
  })
}

calcDisplay()