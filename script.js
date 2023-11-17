let currentInput = '';
let storedInput = '';
let operator = null;

const displayScreen = document.querySelector('.digits');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.innerText;
        displayScreen.innerText = currentInput;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.id) {
            case 'clear':
                currentInput = '';
                storedInput = '';
                operator = null;
                displayScreen.innerText = '';
                break;
            case 'sign':
                currentInput = currentInput.charAt(0) === '-' ? currentInput.slice(1) : '-' + currentInput;
                displayScreen.innerText = currentInput;
                break;
            case 'percent':
                currentInput = parseFloat(currentInput) / 100;
                displayScreen.innerText = currentInput;
                break;
            default:
                if (operator !== null) return;
                operator = button.innerText;
                storedInput = currentInput;
                currentInput = '';
        }
    });
});

document.querySelector('#equals').addEventListener('click', () => {
    if (operator === null || storedInput === '') return;
    let result = eval(storedInput + operator + currentInput);
    displayScreen.innerText = result;
    currentInput = result;
    operator = null;
    storedInput = '';
});