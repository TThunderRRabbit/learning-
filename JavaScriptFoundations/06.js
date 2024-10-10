word = prompt('Input:')
function capitalize (word) {
    let firstLetter = word[0].toUpperCase()
    let secondLetter = word.slice(1).toLowerCase ()
    return `${firstLetter}${secondLetter}`
}

function lastLetter (word) {
    n = word.length
    last = word.slice(n-1)

    return last
}
alert(capitalize(word))
alert(lastLetter(word))