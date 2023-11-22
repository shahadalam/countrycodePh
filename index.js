
const PlayerTx = document.querySelector("#playerTx")
const ComputerTx = document.querySelector("#computerTx")
const resultTx = document.querySelector("#resultTx")
const choiceBtns = document.querySelectorAll(".choiceBtn")

let Player;
let computer ;
let result;

// Create an event listener for button click
choiceBtns.forEach(button => button.addEventListener("click",()=> {
// Get player's choice from button text
Player = button.textContent;
 // Generate computer's choice
computerTr();

// Display player's and computer's choices
PlayerTx.textContent = `Player : ${Player}`;
ComputerTx.textContent = `Computer : ${computer}`;

 // Check and display the winner
resultTx.textContent = checkWinner()
}))

function computerTr(){
    // Generate a random number between 1 and 3
    const randNum = Math.floor(Math.random() * 3) + 1;
     // Determine the computer's choice based on the random number
    switch(randNum){
        case  1 :
        computer ="Rock";
        break;
        case  2 :
        computer ="Paper";
         break;
        case  3 :
        computer ="Scissors";
         break;

    }
}

function checkWinner(){
    // check if players are equal (Draw)
    if (Player == computer ){
        return "Draw !"
    }
    // check computer choice (Rock, Paper, Scissors)
    else if(computer == "Rock"){
        // if player chose Paper, player wins
        return (Player == "Paper") ? "You win " : "you lose"

    }
    else if(computer == "Paper"){
         // if player chose Scissors, player wins
        return (Player == "Scissors") ? "You win " : "you lose"

    }
    else if(computer == "Scissors"){
        // if player chose Rock, player wins
        return (Player == "Rock") ? "You win " : "you lose"

    }
}