let firstNumber = '', secondNumber = '', operator = '', displayValue = ''
let resultShown = false
const display = document.querySelector('.display')

document.addEventListener('DOMContentLoaded', () => {
    const numbers = document.querySelectorAll('.btn-show')
    const operators = document.querySelectorAll('.btn-operator')
    const equalBtn = document.querySelector('#equals')
    const clearBtn = document.querySelector('#clear')
    const signBtn = document.querySelector('#sign')

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
        if (firstNumber !== '' && secondNumber !== '' && operator !== '') {
            operate()
        }
    })

    clearBtn.addEventListener('click', () => {
        clearData()
    })

    signBtn.addEventListener('click', changeSign)
})

function changeSign(event) {
    if (display.textContent !== '') {
        if (display.textContent.includes('-')) {
            display.textContent = display.textContent.substring(1)
        } else {
            display.textContent = '-' + display.textContent
        }
        displayValue = display.textContent
        updateNumbers()
    }
}

function updateDisplay(event) {
    if (resultShown === true) {
        clearData()
        resultShown = false
    }

    if (operator !== '' && secondNumber === '') {
        display.textContent = ''
    }

    if (event.target.textContent === '.' && display.textContent === '') {
        display.textContent = '0'
    }

    return display.textContent += event.target.textContent
}

function updateNumbers() {
    operator === '' ? firstNumber = displayValue : secondNumber = displayValue
    console.log('primero: ' + firstNumber)
    console.log('segundo: ' + secondNumber)
}

function updateOperator(event) {
    const operatorSelected = event.target.textContent

    if (operator !== '' && firstNumber !== '' && secondNumber !== '') {
        operate()
    }

    if (resultShown === true) {
        firstNumber = display.textContent
        secondNumber = ''
        resultShown = false
    }

    operator = operatorSelected
    console.log('operador: ' + operator)
}

function clearData() {
    display.textContent = ''
    firstNumber = ''
    secondNumber = ''
    operator = ''
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

function operate() {
    const operations = {
        '+': add,
        '-': subtract,
        'x': multiply,
        '÷': divide,
    }

    const selectedFunc = operations[operator]
    display.textContent = selectedFunc(+firstNumber, +secondNumber)
    resultShown = true
}