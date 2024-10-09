let firstNumber = '', secondNumber = '', operator = '', displayValue = ''
let resultShown = false, error = false
const display = document.querySelector('.display')

document.addEventListener('DOMContentLoaded', () => {
    const numbers = document.querySelectorAll('.btn-show')
    const operators = document.querySelectorAll('.btn-operator')
    const equalBtn = document.querySelector('#equals')
    const clearBtn = document.querySelector('#clear')
    const signBtn = document.querySelector('#sign')
    const backspace = document.querySelector('#backspace')

    numbers.forEach(btn => {
        btn.addEventListener('click', e => {
            displayValue = updateDisplay(e.target.textContent)
            updateNumbers()
        })
    })

    operators.forEach(btn => {
        btn.addEventListener('click', e => {
            updateOperator(e.target.textContent)
        })
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

    backspace.addEventListener('click', popDisplay)

    document.addEventListener('keydown', e => {
        console.log(e.key)

        if (isNaN(e.key) === false || e.key === '.') {
            displayValue = updateDisplay(e.key)
            updateNumbers()
        }

        if (e.key === 'Backspace') {
            popDisplay()
        }
    })
})

function popDisplay() {
    if (display.textContent !== '') {
        display.textContent = display.textContent.slice(0, -1)
        displayValue = display.textContent
        updateNumbers()
    }
}

function changeSign() {
    if (display.textContent !== '' && !display.textContent.includes('.')) {
        if (display.textContent.includes('-')) {
            display.textContent = display.textContent.substring(1)
        } else {
            display.textContent = '-' + display.textContent
        }
        
        displayValue = display.textContent
        updateNumbers()
    }
}

function updateDisplay(value) {
    if (resultShown === true) {
        clearData()
        resultShown = false
    }

    if (operator !== '' && secondNumber === '') {
        display.textContent = ''
    }

    if (value === '.') {
        if (display.textContent === '') {
            display.textContent = '0'
        } else if (display.textContent.includes('.')) {
            return display.textContent
        }
    }

    return display.textContent += value
}

function updateNumbers() {
    operator === '' ? firstNumber = displayValue : secondNumber = displayValue
}

function updateOperator(value) {
    const operatorSelected = value

    if (operator !== '' && firstNumber !== '' && secondNumber !== '') {
        operate()
    }

    if (firstNumber === '') {
        return
    }

    if (resultShown === true) {
        if (error === true) {
            clearData()
            error = false
            return
        }

        firstNumber = display.textContent
        secondNumber = ''
        resultShown = false
    }

    operator = operatorSelected
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
    let result = selectedFunc(+firstNumber, +secondNumber)

    if (result === Infinity) {
        display.textContent = 'Nice try'
        error = true
    } else {
        if (result % 1 !== 0) {
            const decimalPart = result.toString().split('.')[1]

            if (decimalPart.length > 3) {
                result = result.toFixed(2)
            }
        }
        
        display.textContent = result
    }

    resultShown = true
}