const ageInput = document.getElementById('age');
const calculateButton = document.getElementById('calculate');
const errorMessage = document.getElementById('error');
const resultsSection = document.getElementById('results');
const minimumOutput = document.getElementById('minimum');
const averageOutput = document.getElementById('average');
const maximumOutput = document.getElementById('maximum');

function formatValue(value) {
  return `${value.toFixed(2)} D`;
}

function computeAOA(age) {
  return {
    minimum: 15 - 0.25 * age,
    average: 18.5 - 0.3 * age,
    maximum: 25 - 0.4 * age,
  };
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.remove('hidden');
  resultsSection.classList.add('hidden');
}

function showResults(values) {
  minimumOutput.textContent = formatValue(values.minimum);
  averageOutput.textContent = formatValue(values.average);
  maximumOutput.textContent = formatValue(values.maximum);
  errorMessage.classList.add('hidden');
  resultsSection.classList.remove('hidden');
}

function calculate() {
  const age = Number(ageInput.value);
  if (Number.isNaN(age) || age < 0 || age > 80) {
    showError('Please enter an age between 0 and 80.');
    return;
  }

  const results = computeAOA(age);
  showResults(results);
}

calculateButton.addEventListener('click', calculate);
ageInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    calculate();
  }
});

window.addEventListener('load', calculate);
