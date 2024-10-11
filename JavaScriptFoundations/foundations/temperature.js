function toCelsius (x) {
    celsiusConverted = ((x-32)*5/9).toFixed(2) 
    return celsiusConverted
}

function toFarenheit(x) {
    farenheitConverted = ((x * 9/5) + 32).toFixed(2)
    return farenheitConverted
}

console.log(toCelsius(100))
console.log(toFarenheit(0))
