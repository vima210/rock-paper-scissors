function playGame() {
   let humanScore = 0;
   let computerScore = 0;
   let numberOfRounds = 0;
   function playRound(humanChoice, computerChoice)
   {
   let result = "none";
   if (computerChoice === humanChoice) {
      result = "This round is a draw! Play again";
   } 
   else if (computerChoice === "rock") {
      if(humanChoice === "paper"){
         result = "Paper beats rock! You win this round";
         humanScore++;
      }
      else if(humanChoice==="scissors")
      {
         result = "Rock beats scissors! You lose this round";
         computerScore++;
      }
   }
   else if (computerChoice === "scissors") {
      if (humanChoice === "rock") {
         result = "Rock beats scissors! You win this round";  
         humanScore++;
      }
      else if(humanChoice = "Paper"){
         result = "Scissors beat paper! You lose this round";
         computerScore++;
      }
   }
    else if(computerChoice === "paper"){
      if (humanChoice === "rock") {
         result = "Paper beats rock! You lose this round!";
         computerScore++;
      }
       else if (humanChoice === "scissors"){
          result = "Scissors beat paper! You win this round!";
          humanScore++;
       }
    }
   return result;
}

   if (computerScore < humanScore){
      window.alert("Computer score is: " + computerScore + ". Your score is: " + humanScore + ". Congratulations you won the game!");
   }
   else if (computerScore > humanScore){
      window.alert("Computer score is: " + computerScore + ". Your score is: " + humanScore + ". Ouch! Looks like you lost the game. Try again.");
   }

   else {
      window.alert("Computer score is: " + computerScore + ". Your score is: " + humanScore + ". This game ended in a draw, try again!");
   }

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
 function getPlayerChoice() {
   let choice = window.prompt("Rock, Paper or scissors? Make your choice");
   let lowerCaseChoice = choice.toLowerCase(choice);
   return lowerCaseChoice;
 }
    
function getComputerChoice()
{
    let index = getRandomInt(3);
    let result = "none";
    
   if (index == 0){
        result = "Scissors";
    }
    else if(index == 1) {
       result = "Rock";
    }
    else {
       result = "Paper";
    }
    return result;
}
