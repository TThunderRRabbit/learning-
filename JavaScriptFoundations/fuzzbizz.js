/* 

takes input 
checks if input is div by 3 and 5 
checks if div 3
checks if div 5
output */

let number = parseInt(prompt('Input an integer'))

for (let i=1; i < number; i++ ) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    }
    else if(i % 3 === 0 )  {
        console.log('Fizz')
    }
    else if(i % 5 === 0 )  {
        console.log('Buzz')
    }
    else {
        console.log(i)
    }
}