let firstNumber = '', secondNumber = '', operator = '', displayValue = ''
const display = document.querySelector('.display')

document.addEventListener('DOMContentLoaded', () => {
    const numbers = document.querySelectorAll('.btn-show')
    const operators = document.querySelectorAll('.operator')
    const equalBtn = document.querySelector('#equals')

    numbers.forEach(btn => {
        btn.addEventListener('click', e => {
            displayValue = updateDisplay(e)
            updateNumbers()
        })
    })

    operators.forEach(btn => {
        btn.addEventListener('click', updateOperator)
    })

    equalBtn.addEventListener('click', () => {
        operate(+firstNumber, +secondNumber, operator)
    })

})

function updateDisplay(event) {
    if (operator !== '' && secondNumber === '') {
        display.textContent = ''
    }

    return display.textContent += event.target.textContent
}

function updateNumbers() {
    operator === '' ? firstNumber = displayValue : secondNumber = displayValue
}

function updateOperator(event) {
    if (operator !== '') {

    } else {
        operator = event.target.textContent
    }
}

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
    const operations = {
        '+': add,
        '-': subtract,
        'x': multiply,
        '÷': divide,
    }

    const selectedFunc = operations[operator]
    display.textContent = selectedFunc(firstNumber, secondNumber)
}