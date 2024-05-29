let display = document.getElementById('display');
let currentInput = '';
let shouldResetDisplay = false;

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || '0';
}

function appendNumber(number) {
    if (shouldResetDisplay) {
        currentInput = '';
        shouldResetDisplay = false;
    }
    currentInput += number;
    display.innerText = currentInput;
}

function appendOperator(operator) {
    if (shouldResetDisplay) {
        shouldResetDisplay = false;
    }
    if (currentInput === '') return;
    currentInput += operator;
    display.innerText = currentInput;
}

function appendDot() {
    if (shouldResetDisplay) {
        currentInput = '';
        shouldResetDisplay = false;
    }
    if (currentInput.includes('.')) return;
    currentInput += '.';
    display.innerText = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
        shouldResetDisplay = true;
    } catch {
        display.innerText = 'Error';
        shouldResetDisplay = true;
    }
}
