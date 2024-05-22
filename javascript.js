
const results = document.querySelector("#results");
const roundResult = document.createElement("h3");
roundResult.textContent = "Here you will see how things are going";
results.appendChild(roundResult);

const gameResult = document.createElement("p");
gameResult.textContent = "Current score is: Human 0 - Computer 0";
results.appendChild(gameResult);

const rock = document.querySelector("#rock")
   function rockFunction(){
      playRound("rock", getComputerChoice())
   }
rock.addEventListener("click", rockFunction);


const paper = document.querySelector("#paper")
   function paperFunction(){
      playRound("paper", getComputerChoice());
   }
paper.addEventListener("click", paperFunction);

const scissors = document.querySelector("#scissors")
   function scissorFunction(){
      playRound("scissors", getComputerChoice());
   }
scissors.addEventListener("click", scissorFunction);


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
    numberOfRounds += 1;
    roundResult.textContent = result;
    gameResult.textContent = ("This is round " +
                               numberOfRounds + 
                              ". The current score is: Human " + 
                              humanScore+ 
                              " - Computer "
                              +computerScore);
   checkScore();
}

function checkScore() {
   if (humanScore == 3){
        roundResult.textContent = "Final score: Human " + humanScore + " Computer: " + computerScore + ". You Win!";
        gameResult.textContent = "Wanna have another try? Click on the buttons";
        humanScore = 0; 
        computerScore = 0; 
        numberOfRounds = 0; 
      }
   else if (computerScore == 3){
         roundResult.textContent = "Final score: Human " + humanScore + " Computer: " + computerScore + ". You Lose!";
         gameResult.textContent = "Wanna have another try? Click on the buttons";
         humanScore = 0; 
        computerScore = 0; 
        numberOfRounds = 0; 
      }
   }

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
 
function getComputerChoice()
{
    let index = getRandomInt(3);
    let result = "none";
    
   if (index == 0){
        result = "scissors";
    }
    else if(index == 1) {
       result = "rock";
    }
    else {
       result = "paper";
    }
    return result;
}