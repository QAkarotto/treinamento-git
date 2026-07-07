const operations = {
  sum: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b
};

const form = document.querySelector("#calculator-form");
const result = document.querySelector("#result");

function calculate() {
  const formData = new FormData(form);
  const firstNumber = Number(formData.get("firstNumber"));
  const secondNumber = Number(formData.get("secondNumber"));
  const operation = formData.get("operation");
  const operationResult = operations[operation](firstNumber, secondNumber);

  result.textContent = `Resultado: ${operationResult}`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  calculate();
});

calculate();
