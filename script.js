const display = document.getElementById('display');

function appendValue(value) {
    if(display.value === 'Error') display.value = ''; 
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

document.addEventListener('keydown', (e) => {
    const allowedKeys = '0123456789+-*/.';
    if(allowedKeys.includes(e.key)) {
        appendValue(e.key);
    } else if(e.key === 'Enter') {
        e.preventDefault(); 
        calculateResult();
    } else if(e.key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if(e.key.toLowerCase() === 'c') {
        clearDisplay();
    }
});
