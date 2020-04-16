const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ){
      return userInput
    }else {
      console.log('error the input is wrong')
    }
  }
  
  
  function getComputerChoice(){
   let randomNumber = Math.floor(Math.random() * 3);
    
      switch(randomNumber){
        case 0:
          return 'rock';
        case 1:
          return 'paper';
        case 2:
          return 'scissors'
      }
  }
  
  function determineWinner(userChoice,computerChoice){
    if (userChoice === computerChoice){
      return 'The game is a tie!';
    } else if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
        return 'The Computer won!';
      }else {
        return 'You won!';
      }
    }else if (userChoice === 'paper'){
      if (computerChoice === 'scissors'){
        return 'The computer won!';
      }else {
        return 'You won!';
      }
    }else if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'The Computer won!';
      }else {
        return 'You won!'
      }
    }
  }
  
  
  //console.log(determineWinner('paper','rock' ))
  
  function playGame(){
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice()
    console.log('You threw: ' + userChoice);
    console.log('The Computer threw ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
    
  };
  
  playGame();