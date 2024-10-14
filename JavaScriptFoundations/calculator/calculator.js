// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
const numbers = document.querySelectorAll('.number')
const input = document.querySelector('.input')
const clear = document.querySelector('.clear') 
const operations = document.querySelectorAll('.operation')
let currentOperation = ''
const calculate = document.querySelector('.calculate')
const feedback = document.querySelector('.feedback')
let a = ''
let b = ''
const percent = document.querySelector('.percent')
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
        const result = parseInt(a) + parseInt(b)
        feedback.textContent = result
        a = result
        input.textContent = a
        b = ''
        result = ''
        currentOperation =''
    }

    else if (currentOperation === '*') {
        const result = parseInt(a) * parseInt(b)
        feedback.textContent = result
        a = result
        input.textContent = a
        b = ''
        result = ''
        currentOperation =''
    }

    else if (currentOperation === '/') {
        const result = parseInt(a) / parseInt(b)
        feedback.textContent = result
        a = result
        input.textContent = a
        b = ''
        result = ''
        currentOperation =''
    }

    else if (currentOperation === '-') {
        const result = parseInt(a) - parseInt(b)
        feedback.textContent = result
        a = result
        input.textContent = a
        b = ''
        result = ''
        currentOperation =''

    
    }
   
})

    percent.addEventListener('click', function () {
        
        if (result == '') {
            result = parseFloat(a)/100
        }
        feedback.textContent = result
        a = result
        input.textContent = a
        b = ''
        result = ''
        currentOperation =''

        

    })

});



