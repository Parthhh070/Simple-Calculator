const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const calculator = document.querySelector('.calculator');

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        calculator.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        calculator.classList.remove('dark-mode');
    }
});

const display = document.getElementById('display');
const buttons = Array.from(document.querySelectorAll('.buttons button'));

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

function handleButtonClick(event) {
    const buttonText = event.target.innerText;
    if (buttonText === 'C') {
        display.value = '';
    } else if (buttonText === '=') {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    } else {
        display.value += buttonText;
    }
}

