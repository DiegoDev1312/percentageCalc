const button = document.querySelector('button');
const percentage = document.querySelector('.percentage');
const value = document.querySelector('.value');
const inputResult = document.querySelector('.result-percentage');

function handleCalcPress() {
    const calcValue = (percentage.value * value.value) / 100;
    inputResult.value = calcValue;
    inputResult.style.display = 'block';
}

function changeInputValue(e) {
    console.log(e.target.value);
}

percentage.addEventListener('input', changeInputValue)
button.addEventListener('click', handleCalcPress);
