let firstNumber = '', secondNumber = '', operator = '', displayValue = ''
const display = document.querySelector('.display')


document.addEventListener('DOMContentLoaded', () => {
    const numbers = document.querySelectorAll('.btn-show')
    const operators = document.querySelectorAll('.operator')

    numbers.forEach(btn => {
        btn.addEventListener('click', e => {
            displayValue = updateDisplay(e)
            updateNumbers()
        })
    })

    operators.forEach(btn => {
        btn.addEventListener('click', updateOperator)
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
    console.log(firstNumber)
    console.log(secondNumber)
}

function updateOperator(event) {
    if (firstNumber !== '' && secondNumber !== '' && operator !== '') {
        console.log('do something')
    } else {
        operator = event.target.textContent
    }

    console.log(operator)
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
    selectedFunc(firstNumber, secondNumber)
}