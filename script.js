
const winDisplay = document.getElementById('score-wins')
const lossesDisplay = document.getElementById('score-losses')

let score = {
  wins: 0,
  losses: 0
}

const computerplayed = computerPlay();

function computerPlay(){
  const randomNumber = Math.floor((Math.random() * 10));
  let computerMove;

  if(randomNumber <= 5){
    computerMove = 'Head'
  }else if(randomNumber > 5){
    computerMove = 'Tail'
  }

  console.log(randomNumber)
  return computerMove;
}

function playGame(playerMove){
  let result;

  // if(computerplayed === playerMove){
  // 
  // }else{
  //   
  // }

  if(computerPlay() === playerMove){
    result = 'You loose'
    lossesDisplay.textContent = score.losses++
  }else{
    winDisplay.textContent = score.wins++
    result = 'You win' 
  }

  console.log(result)
  console.log(score)
  console.log(computerPlay())
}


playGame('Tail')
