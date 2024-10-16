// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
const numbers = document.querySelectorAll('.number')
const input = document.querySelector('.input')
const clear = document.querySelector('.clear') 
const operations = document.querySelectorAll('.operation')
const calculate = document.querySelector('.calculate')
const feedback = document.querySelector('.feedback')
const del = document.querySelector('.del')


let a = ''
let b = ''
let currentOperation = ''

numbers.forEach(function(number) {
    number.addEventListener('click', function () {
    const currentNumber = number.textContent;
    input.textContent += currentNumber;
    
    if (currentOperation !== '') {
        b += currentNumber
    } 
    else {
        a += currentNumber
    }

        }); 
    });
    
clear.addEventListener('click', function () {
    
    input.textContent = ''
    a = ''
    b = ''
    result = ''
    currentOperation =''
    feedback.textContent = ''

    
})

operations.forEach(function(operation) {
    operation.addEventListener('click', function () {
        
                
        currentOperation = operation.textContent
        input.textContent = currentOperation
        
        

    })


})

calculate.addEventListener('click', function () {

     

    if (currentOperation === '+') {
        const result = parseFloat(a) + parseFloat(b)
        feedback.textContent = result
        a = result
        
        b = ''
        result = ''
        currentOperation =''
    }

    else if (currentOperation === '*') {
        const result = parseFloat(a) * parseFloat(b)
        feedback.textContent = result
        a = result
        
        b = ''
        result = ''
        currentOperation =''
    }

    else if (currentOperation === '/') {
        const result = parseInt(a) / parseInt(b)
        feedback.textContent = result
        a = result
        
        b = ''
        result = ''
        currentOperation =''
    }

    else if (currentOperation === '-') {
        const result = parseFloat(a) - parseFloat(b)
        feedback.textContent = result
        a = result
        
        b = ''
        result = ''
        currentOperation =''

    
    }
   

})

del.addEventListener('click', function() {

    input.textContent = String(input.textContent).slice(0,-1)

    if (currentOperation !== '') {
        b  = String(b).slice(0,-1)
    } 
    else {
        a = String(a).slice(0,-1)
    }

   
})

});



