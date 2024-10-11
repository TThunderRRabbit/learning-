inputWord = prompt('Input a word')
function repeatString (word, times) {
    word = ''
    for (i = 0; i < times; i++) {
        word += inputWord
        
    }
    return word;
}

alert(repeatString(inputWord, 2))