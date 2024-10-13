
function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0: 
            computerChoice = 'Rock'
            break
        case 1: 
            computerChoice = 'Paper'
            break
        case 2:
            computerChoice = 'Scissors'
            break
    }
    return computerChoice
}


let humanScore = 0 
let computerScore = 0 

function playRound (humanChoice, computerChoice) {
    if (humanChoice === 'scissors') {
        if (computerChoice === 'Rock') {
            computerScore ++
            alert(`Computer picked:${computerChoice} You lose, computer:${computerScore}, you:${humanScore}`)
        }
        else if (computerChoice === 'Paper') {
            humanScore ++
            alert(`Computer picked:${computerChoice} You win, computer:${computerScore}, you:${humanScore}`)
        }
        else {
            alert(`Computer picked:${computerChoice} Tie, computer:${computerScore}, you:${humanScore}`)
        }

    }
    else if (humanChoice === 'paper') {
        if (computerChoice === 'Rock') {
            humanScore ++
            alert(`Computer picked:${computerChoice} You win, computer:${computerScore}, you:${humanScore}`)
        }
        else if (computerChoice === 'Paper') {
            
            alert(`Computer picked:${computerChoice} Tie, computer:${computerScore}, you:${humanScore}`)
        }
        else {
            computerScore ++ 
            alert(`Computer picked:${computerChoice} You lose, computer:${computerScore}, you:${humanScore}`)
        }

    }
    else if (humanChoice === 'rock') {
        if (computerChoice === 'Rock') {
            alert(`Computer picked:${computerChoice} Tie, computer:${computerScore}, you:${humanScore}`)
        }
        else if (computerChoice === 'Paper') {
            computerScore ++
            alert(`Computer picked:${computerChoice} You lose, computer:${computerScore}, you:${humanScore}`)
        }
        else {
            humanScore ++
            alert(`Computer picked:${computerChoice} You win, computer:${computerScore}, you:${humanScore}`)
        }

    }
    
}

getComputerChoice()

const rock  = document.querySelector('.rock');

rock.addEventListener('click', function () {
        humanChoice = 'rock'
        playRound(humanChoice, computerChoice)
})


const paper  = document.querySelector('.paper');

paper.addEventListener('click', function () {
        humanChoice = 'paper'
        playRound(humanChoice, computerChoice)
})

const scissors  = document.querySelector('.scissors');

scissors.addEventListener('click', function () {
        humanChoice = 'scissors'
        playRound(humanChoice, computerChoice)
})
