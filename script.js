let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNumber(number) {
    currentNumber += number;
    updateDisplay(currentNumber);
}

function clearScreen() {
    currentNumber = "";
    previousNumber = "";
    operator = "";
    updateDisplay("");
}

function calculate(op) {
    if (currentNumber === "") return;
    if (previousNumber !== "") computeResult();
    operator = op;
    previousNumber = currentNumber;
    currentNumber = "";
}

function computeResult() {
    const prev = parseFloat(previousNumber);
    const curr = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(curr)) return;

    let result;
    switch (operator) {
        case "+": result = prev + curr; break;
        case "-": result = prev - curr; break;
        case "*": result = prev * curr; break;
        case "/": result = prev / curr; break;
        case "%": result = prev % curr; break;
        default: return;
    }

    currentNumber = result.toString();
    operator = "";
    previousNumber = "";
    updateDisplay(currentNumber);
}

function changeSign() {
    if (currentNumber !== "") {
        currentNumber = (-parseFloat(currentNumber)).toString();
        updateDisplay(currentNumber);
    }
}

function squareRoot() {
    if (currentNumber !== "") {
        let result = Math.sqrt(parseFloat(currentNumber));
        currentNumber = result.toString();
        updateDisplay(currentNumber);
    }
}

function logarithm() {
    if (currentNumber !== "") {
        let num = parseFloat(currentNumber);
        if (num <= 0) {
            updateDisplay("Error");
            currentNumber = "";
            return;
        }
        let result = Math.log10(num);
        currentNumber = result.toString();
        updateDisplay(currentNumber);
    }
}

function updateDisplay(value) {
    document.getElementById("result").value = value;
}
