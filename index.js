const computerchoiceDisplay = document.getElementById("computer-choice")
const userchoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possiblechoice = document.querySelectorAll("img")

var images_all= ["paper.png", "rock.png","scissors.png"]

let computerimage
let userchoice
let computerchoice
let result

var i

possiblechoice.forEach(possiblechoice => possiblechoice.addEventListener('click', (e) => {
    userchoice = e.target.id
    imgselect() 
    userchoiceDisplay.src = images_all[i]
    generatecomputerchoice()
    theresult() 
}))

function generatecomputerchoice(){
    const randomNumber = Math.floor(Math.random()*possiblechoice.length) + 1

    if(randomNumber === 1){
        computerimage = images_all[0]
        computerchoice = "paper"
    }
    else if(randomNumber === 2){
        computerimage = images_all[1]
        computerchoice = "rock"
    }
    else{
        computerimage = images_all[2]
        computerchoice = "scissors"
    }

    computerchoiceDisplay.src = computerimage
}

function theresult(){
    if(computerchoice === userchoice){
        result = "Draw"
    }
    else if(computerchoice === "rock" && userchoice === "paper"){
        result = "🙂"
    }
    else if(computerchoice === "paper" && userchoice === "rock"){
        result = "😔"
    }
    else if(computerchoice === "rock" && userchoice === "scissor"){
        result = "😔"
    }
    else if(computerchoice === "scissor" && userchoice === "rock"){
        result = "🙂"
    }
    else if(computerchoice === "paper" && userchoice === "scissor"){
        result = "🙂"
    }
    else if(computerchoice === "scissor" && userchoice === "paper"){
        result = "😔"
    }
    resultDisplay.innerHTML = result
}

function imgselect(){
    if(userchoice === "paper"){
        i = 0
    }
    else if(userchoice === "scissors"){
        i = 2
    }
    else{
        i = 1
    }
}