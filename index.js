const computerchoiceDisplay = document.getElementById("computer-choice")
const userchoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possiblechoice = document.querySelectorAll("button")

let userchoice
let computerchoice
let result

possiblechoice.forEach(possiblechoice => possiblechoice.addEventListener('click', (e) => {
    userchoice = e.target.id
    userchoiceDisplay.innerHTML = userchoice
    generatecomputerchoice()
    theresult() 
}))

function generatecomputerchoice(){
    const randomNumber = Math.floor(Math.random()*possiblechoice.length) + 1

    if(randomNumber === 1){
        computerchoice = "rock"
    }
    else if(randomNumber === 2){
        computerchoice = "paper"
    }
    else{
        computerchoice = "scissor"
    }

    computerchoiceDisplay.innerHTML = computerchoice
}

function theresult(){
    if(computerchoice === userchoice){
        result = "its a draw"
    }
    else if(computerchoice === "rock" && userchoice === "paper"){
        result = "you win"
    }
    else if(computerchoice === "paper" && userchoice === "rock"){
        result = "you lose"
    }
    else if(computerchoice === "rock" && userchoice === "scissor"){
        result = "you lose"
    }
    else if(computerchoice === "scissor" && userchoice === "rock"){
        result = "you win"
    }
    else if(computerchoice === "paper" && userchoice === "scissor"){
        result = "you win"
    }
    else if(computerchoice === "scissor" && userchoice === "paper"){
        result = "you lose"
    }
    resultDisplay.innerHTML = result
}