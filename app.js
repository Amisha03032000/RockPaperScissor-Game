let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const display = document.querySelector("#display");
const compdisplay = document.querySelector("#compdisplay");

const showWinner =(userWin)=>{

    if(userWin){
        
        userScore++;
            display.innerText=userScore;
            console.log("user won");
            console.log("userscore" + userScore);
    }else{
        compScore++;
        compdisplay.innerText=compScore;
        console.log("user lost");
        console.log("comp score" + compScore);
    }
}
const compPlay = () => {
    const options = ["rock", "paper", "scissor"];
    const compId = Math.floor(Math.random() * 3);
    const compC = options[compId];
    
    console.log("computer =" + compC);
    return compC;
}
const drawGame =() =>{
    display.innerText=userScore;
    compdisplay.innerText=compScore;
}
const playGame = (userChoice) => {
    const compChoice = compPlay();
    console.log("user= " + userChoice);

    if(userChoice == compChoice){
            drawGame();
    }else{
        var userWin=true;
        if(userChoice==="rock")
        {
            //scissor, paper
            userWin = compChoice==="paper"? false : true;
        
        }
        if(userChoice==="paper" )
        {
            userWin = compChoice==="scissor"? false : true;
        }
        if(userChoice==="scissor"){
            userWin = compChoice ==="rock" ? false: true;
        }
    }
    showWinner(userWin);

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
     
       const userChoice = choice.getAttribute("id");
       console.log("user= "+ userChoice);
       playGame(userChoice);

    })
})
