const buttons = document.querySelector('.buttons')
const tablo = document.querySelector('.tablo')

const numbers = ['0','1','2','3','4','5','6','7','8','9']
const operators = ['AC','+/-','%','/','*','-','+','=',',']

let num1 = 0
let num2 = 0 
let operator = ''

buttons.addEventListener('click', (Event)=>{
    const context = Event.target.innerText

    if(numbers.includes(context)){
        console.log('Число')
        tablo.value = context
        num1 = +tablo.value
    }
})