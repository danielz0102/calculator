document.addEventListener('DOMContentLoaded', () => {
    let firstNumber = null, secondNumber = null, operator = null, display = null
    const displayBtns = document.querySelectorAll('.btn-show')

    displayBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            display = updateDisplay(e)
        })
    })
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

function updateDisplay(event) {
    const display = document.querySelector('.display')
    display.textContent += event.target.textContent
    return display.textContent
}