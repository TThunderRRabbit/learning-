const button1 = document.querySelector('.btn1')
const button2 = document.querySelector('.btn2')
const button3 = document.querySelector('.btn3')
const button4 = document.querySelector('.btn4')
const button5 = document.querySelector('.btn5')
const button6 = document.querySelector('.btn6')
const button7 = document.querySelector('.btn7')
const button8 = document.querySelector('.btn8')
const button9 = document.querySelector('.btn9')

let moveList = []
let xmoveList = []
button1.addEventListener('click', function() {
    moveList.push(1)
    console.log(moveList)
})

button2.addEventListener('click', function() {
    xmoveList.push(2)
    console.log(xmoveList)
})
button3.addEventListener('click', function() {
    moveList.push(3)
    console.log(moveList)
})
button4.addEventListener('click', function() {
    xmoveList.push(4)
    console.log(xmoveList)
})
button5.addEventListener('click', function() {
    moveList.push(5)
    console.log(moveList)
})
button6.addEventListener('click', function() {
    xmoveList.push(6)
    console.log(xmoveList)
})
button7.addEventListener('click', function() {
    moveList.push(7)
    console.log(moveList)
})
button8.addEventListener('click', function() {
    xmoveList.push(8)
    console.log(xmoveList)
})
button9.addEventListener('click', function() {
    moveList.push(9)
    console.log(moveList)
    checkWin()
})

function checkWin () {
if (moveList.toString === 1,5,9) {
    alert('You win')
} }


