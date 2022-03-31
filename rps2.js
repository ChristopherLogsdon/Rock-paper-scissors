let command = document.querySelector(".buttons");
let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')

let gameCounter = 0
let playerCounter = 0;
let computerCounter = 0;
let userChoice = undefined;

rock.addEventListener('click', function userSelection() {userChoice = 0;});
paper.addEventListener('click', function userSelection() {userChoice = 1;});
scissors.addEventListener('click', function userSelection() {userChoice = 2;});

let computerMove = undefined;

if (rock.addEventListener('click', function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
        let j = Math.floor(Math.random() * choices.length);
        if (j === 0) {
            computerMove = 0;
            console.log(computerMove);
        } else if (j == 1) {
            computerMove = 1;
            console.log(computerMove);
        } else {
            computerMove = 2;
            console.log(computerMove);
        }
        roundOfGamePlay()
}));
if (paper.addEventListener('click', function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
        let j = Math.floor(Math.random() * choices.length);
        if (j === 0) {
            computerMove = 0;
            console.log(computerMove);
        } else if (j == 1) {
            computerMove = 1;
            console.log(computerMove);
        } else {
            computerMove = 2;
            console.log(computerMove);
        }
        roundOfGamePlay()
}));
if (scissors.addEventListener('click', function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
        let j = Math.floor(Math.random() * choices.length);
        if (j === 0) {
            computerMove = 0;
            console.log(computerMove);
        } else if (j == 1) {
            computerMove = 1;
            console.log(computerMove);
        } else {
            computerMove = 2;
            console.log(computerMove);
        } 
        roundOfGamePlay()
}));


    function roundOfGamePlay() {
       
        let result = "";
    
        
        
        
        if (playerCounter < 4 && computerCounter < 4 ) {
            if (userChoice === computerMove) {
                result =  "tie, you and the computer chose the same move";
            } else if (userChoice === 0 && computerMove === 1) {
                result = "Computer wins, paper beats rock";
                computerCounter += 1; 
            } else if (userChoice=== 0 && computerMove === 2) {
                result = "You win, rock beats scissors";
                playerCounter += 1;
            } else if (userChoice === 1 && computerMove === 0) {
                result = "You win, paper beats rock";
                playerCounter += 1;
            } else if (userChoice === 1 && computerMove === 2) {
                result = "Computer wins, scissors beats paper";
                computerCounter += 1; 
            } else if (userChoice === 2 && computerMove === 1) {
                result = "You win, scissors beats paper";
                playerCounter += 1;
            } else if (userChoice === 2 && computerMove === 0) {
                result = "Computer wins, rock beats scissors";
                computerCounter += 1; 
            } return console.log(result);
        } else {
            if (playerCounter == 4) {
                console.log("You win the game!");
            } else {
                console.log("Computer wins, try again!");
            } 
            playerCounter = 0;
            computerCounter = 0;
    
    }}; 


     