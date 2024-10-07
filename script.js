var  humanScore = 0; 
var computerScore = 0;

//  get Random Choice from Computer 
function getComputerChoice () {

    let selection = ["Rock", "Paper", "Scissor"];
    let getRandomChoice = Math.floor(Math.random()*3);
   let Select =  selection[getRandomChoice];

    return Select.toLowerCase();
    
}

getComputerChoice();

// get human Choice

function getHumanChoice () {
  let humanChoices = prompt("Enter your Move");
  
  return humanChoices.toLowerCase(); // use to case insensitive

}

// play rounds
function playRounds (humanChoice, computerChoice) {

    if(computerChoice === humanChoice){
        return " match tie !";
    }
    else if (
        (humanChoice === 'Rock' && computerChoice === 'Scissor') ||
        (humanChoice === 'Paper' && computerChoice === 'Rock') ||
        (humanChoice === 'Scissor' && computerChoice === 'Paper')
    ) {
        humanScore ++;
        return  "Human Win !";
    }
    else {
        computerScore ++;
        return "Computer Win!";
    }
}




console.log();

//  playGame

function playGame () {
    for(let i=1;i<=5; i++)
    {
        const humanSelection = getHumanChoice(); 
        const computerSelection = getComputerChoice();
         const result = playRounds(humanSelection, computerSelection);
        
         console.log(`round ${i} - ${result}`);

        }// Final scores after 5 rounds
    alert(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`); if(humanScore)

   if(humanScore > computerScore){
    console.log("Human is the overall winner!");
   }
   else if(humanScore < computerScore){
     console.log("Computer is the overall winner!");
}

else {
    console.log("It's a tie overall!");
 
} 

}

// Start the game 
playGame();
