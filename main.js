const display = document.querySelector('.display')
const controlButtons = document.querySelector('.controls').children
const allSymbols = ['+', '-', '*', '/', 'C', '=', '%']

let  firstValue = ''
let secondValue = ''
let symbol = ''
let result = ''


const calculate = () => {
    firstValue  = parseFloat(firstValue)
    secondValue  = parseFloat(secondValue)
    

    if(symbol === '+' ) result = firstValue + secondValue
    if(symbol === '-' ) result = firstValue -secondValue
    if(symbol === '*' ) result = firstValue * secondValue
    if(symbol === '/' ) result = firstValue/secondValue
    if(symbol === '%' ) result = firstValue%secondValue

    display.innerText = result
    firstValue = result
    secondValue = ''
}

for (let button of controlButtons){
    button.addEventListener('click', () => {
        const {innerText: btnValue} = button
        const btnValueIsSymbol = allSymbols.includes(btnValue)

        if(!secondValue && btnValue === '=') return null;

        if (btnValue === 'C') {
            firstValue = secondValue = symbol = ''
            return display.innerText = ''
        }
        else if (firstValue && btnValueIsSymbol){
            secondValue && calculate()
            symbol = btnValue
        }
        else if(!symbol){
            firstValue+=btnValue
        }
        else if(symbol) secondValue += btnValue;

        if (btnValue != '='){ 
            display.innerText += btnValue
        }
        
    })
}


// backspace funcitonality and also restart functionality