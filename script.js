document.addEventListener('DOMContentLoaded', () => {
    let firstNumber = null, secondNumber = null, operator = null

})

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(firstNumber, secondNumber, operator) {
    const functions = {
        '+': add,
        '-': subtract,
        'x': multiply,
        '÷': divide,
    }

    const selectedFunc = functions[operator]
    selectedFunc(firstNumber, secondNumber)
}