input = prompt('Please input a string to be reversed')
function reverseString (string) {

    reversed = (string.split('')).reverse()
    newReversed = ''
    for (i = 0; i < reversed.length; i++) {
        newReversed += reversed[i]
    }
    return newReversed
}

reverse = reverseString(input)
alert(reverse)