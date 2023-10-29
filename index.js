function getComputerChoice(){
  const arr = ["rock", "paper", "scissors"];

  const computerChoice = Math.floor(Math.random() * arr.length);

  const item = arr[computerChoice];

  return item;
}


function playRound(playerSelection, computerSelection){
  
   
  if(playerSelection ===  computerSelection){
      return "The game is a tie";
  }
  else if(playerSelection == "rock" && computerSelection == "paper"){ // 4
      return "You Lose! Paper beats Rock";
  }
  else if(playerSelection === "paper" && computerSelection === "scissors"){ //5
      return "You Lose! Scissors beats Paper";
  }
  else if(playerSelection == "scissors" && computerSelection == "rock"){ //6
      return "You Lose! Rock beats Scissors";
  }
  else if(playerSelection == "rock" && computerSelection == "scissors"){ //7
      return "You win! Rock beats Scissors";
  }
  else if(playerSelection == "scissors" && computerSelection == "paper"){ //8
      return "You Win! Scissors beats Paper";
  }else if(playerSelection == "paper" && computerSelection == "rock"){ //9
      return "You Win! Paper beats Rock";
  }else{
      return "Wrong input!"
  }

}


const playerSelection = "ROCK";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection.toLowerCase(), computerSelection));
console.log("PLayer choice: " + playerSelection);

console.log("Computer choice: " + computerSelection);
