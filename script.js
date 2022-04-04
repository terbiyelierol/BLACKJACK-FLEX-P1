const deck = [
  { name: "c02", value: 2, img: '<img src = "/card-erol/c02.svg">' },
  { name: "c03", value: 3, img: '<img src = "/card-erol/c03.svg">' },
  { name: "c04", value: 4, img: '<img src = "/card-erol/c04.svg">' },
  { name: "c05", value: 5, img: '<img src = "/card-erol/c05.svg">' },
  { name: "c06", value: 6, img: '<img src = "/card-erol/c06.svg">' },
  { name: "c07", value: 7, img: '<img src = "/card-erol/c07.svg">' },
  { name: "c08", value: 8, img: '<img src = "/card-erol/c08.svg">' },
  { name: "c09", value: 9, img: '<img src = "/card-erol/c09.svg">' },
  { name: "c10", value: 10, img: '<img src = "/card-erol/c10.svg">' },
  { name: "cA", value: 11, img: '<img src = "/card-erol/cA.svg">' },
  { name: "cJ", value: 10, img: '<img src = "/card-erol/cJ.svg">' },
  { name: "cQ", value: 10, img: '<img src = "/card-erol/cQ.svg">' },
  { name: "cK", value: 10, img: '<img src = "/card-erol/cK.svg">' },
  { name: "d02", value: 2, img: '<img src = "/card-erol/d02.svg">' },
  { name: "d03", value: 3, img: '<img src = "/card-erol/d03.svg">' },
  { name: "d04", value: 4, img: '<img src = "/card-erol/d04.svg">' },
  { name: "d05", value: 5, img: '<img src = "/card-erol/d05.svg">' },
  { name: "d06", value: 6, img: '<img src = "/card-erol/d06.svg">' },
  { name: "d07", value: 7, img: '<img src = "/card-erol/d07.svg">' },
  { name: "d08", value: 8, img: '<img src = "/card-erol/d08.svg">' },
  { name: "d09", value: 9, img: '<img src = "/card-erol/d09.svg">' },
  { name: "d10", value: 10, img: '<img src = "/card-erol/d10.svg">' },
  { name: "dA", value: 11, img: '<img src = "/card-erol/dA.svg">' },
  { name: "dJ", value: 10, img: '<img src = "/card-erol/dJ.svg">' },
  { name: "dQ", value: 10, img: '<img src = "/card-erol/dQ.svg">' },
  { name: "dK", value: 10, img: '<img src = "/card-erol/dK.svg">' },
  { name: "h02", value: 2, img: '<img src = "/card-erol/h02.svg">' },
  { name: "h03", value: 3, img: '<img src = "/card-erol/h03.svg">' },
  { name: "h04", value: 4, img: '<img src = "/card-erol/h04.svg">' },
  { name: "h05", value: 5, img: '<img src = "/card-erol/h05.svg">' },
  { name: "h06", value: 6, img: '<img src = "/card-erol/h06.svg">' },
  { name: "h07", value: 7, img: '<img src = "/card-erol/h07.svg">' },
  { name: "h08", value: 8, img: '<img src = "/card-erol/h08.svg">' },
  { name: "h09", value: 9, img: '<img src = "/card-erol/h09.svg">' },
  { name: "h10", value: 10, img: '<img src = "/card-erol/h10.svg">' },
  { name: "hA", value: 11, img: '<img src = "/card-erol/hA.svg">' },
  { name: "hJ", value: 10, img: '<img src = "/card-erol/hJ.svg">' },
  { name: "hQ", value: 10, img: '<img src = "/card-erol/hQ.svg">' },
  { name: "hK", value: 10, img: '<img src = "/card-erol/hK.svg">' },
  { name: "s02", value: 2, img: '<img src = "/card-erol/s02.svg">' },
  { name: "s03", value: 3, img: '<img src = "/card-erol/s03.svg">' },
  { name: "s04", value: 4, img: '<img src = "/card-erol/s04.svg">' },
  { name: "s05", value: 5, img: '<img src = "/card-erol/s05.svg">' },
  { name: "s06", value: 6, img: '<img src = "/card-erol/s06.svg">' },
  { name: "s07", value: 7, img: '<img src = "/card-erol/s07.svg">' },
  { name: "s08", value: 8, img: '<img src = "/card-erol/s08.svg">' },
  { name: "s09", value: 9, img: '<img src = "/card-erol/s09.svg">' },
  { name: "s10", value: 10, img: '<img src = "/card-erol/s10.svg">' },
  { name: "sA", value: 11, img: '<img src = "/card-erol/sA.svg">' },
  { name: "sJ", value: 10, img: '<img src = "/card-erol/sJ.svg">' },
  { name: "sQ", value: 10, img: '<img src = "/card-erol/sQ.svg">' },
  { name: "sK", value: 10, img: '<img src = "/card-erol/sK.svg">' },
];

//cache the elements
const playBtn = document.querySelector(".play-btn");
const resume=document.querySelector(".playagain-btn")
const dealerAreaImage = document.querySelector(".dealer-area");
const playerAreaImage = document.querySelector(".player-area");
const playerPoint = document.querySelector(".p-total-p");
const dealerPoint = document.querySelector(".d-total-d");
const hitBtn = document.querySelector(".hit-btn");
const standBtn = document.querySelector(".stand-btn");
const resetBtn = document.querySelector('.reset-btn')
const tokens = document.querySelectorAll('.token')
const betTotal = document.querySelector('.bet-amount')
const walletAmount = document.querySelector('.wallet-amount')
const token10 = document.getElementById('10')
const token50 = document.getElementById('50')
const token100 = document.getElementById('100')
const token200 = document.getElementById('200')
const images = document.querySelectorAll('img')
const playerMsg = document.querySelector('.player-msg')
const dealerMsg = document.querySelector('.dealer-msg')
const tieMsg = document.querySelector('.tie-msg')
const exitBtn = document.querySelectorAll('.exit')
let playerValue = [];
let dealerValue = [];
let tokenValue = [];
let tokenTotal = 0;
let playerValueTotal = 0;
let dealerValueTotal = 0;
let emptyImageDeleted;
playBtn.disabled = true;
hitBtn.disabled = true;
standBtn.disabled = true;
resume.disabled = true;
token10.disabled = false
token50.disabled = false
token100.disabled = false
token200.disabled = false

//sounds

const tokenSound = new Audio('/sounds/tokens.mp3');
const cardSound = new Audio('/sounds/cards.mp3');
const playerWinSound = new Audio('/sounds/player-win.mp3');
const playerLostSound = new Audio('/sounds/playerlost.mp3');
const gameTieSound = new Audio('/sounds/game-tie.mp3');
const songSound = new Audio('/sounds/The Cinematic Orchestra - The Awakening Of A Woman (Burnout).mp3');
const songBtn = document.getElementById('song')

songBtn.addEventListener('click',(e)=>{
    if(e.target.classList.contains('music-on')){
      songSound.play()
      songBtn.classList.add('music-off')
      songBtn.classList.remove('music-on')
      songBtn.innerHTML = 'Let the Music Pause'
    }else{
      songBtn.classList.add('music-on')
      songBtn.classList.remove('music-off')
      songSound.pause()
      songBtn.innerHTML = 'Let the Music Play'
    }  
})

function tokenAudio(){
  tokenSound.currentTime=0
  tokenSound.play()
}

function cardAudio(){
  cardSound.currentTime=0
  cardSound.play()
}

function playerWinAudio(){
  playerWinSound.currentTime=0
  playerWinSound.play()
}

function playerLostAudio(){
  playerLostSound.currentTime=0
  playerLostSound.play()
}

function gameTieAudio(){
  gameTieSound.currentTime=0
  gameTieSound.play()
}


/*------functions------*/


/*----playerSide functions---*/


function cardPickPlayer() {
  cardAudio()
  let randomPlayerNumber = Math.floor(Math.random() * deck.length);
  let tempPlayerCard = deck[randomPlayerNumber];
  playerAreaImage.innerHTML += " " + tempPlayerCard.img;
  deck.splice(randomPlayerNumber, 1);
  playerValue.push(tempPlayerCard.value);
  playerHandTotal(playerValue);
}

function playerHandTotal(val) {
  let playerValueTotal = 0;
  for (let i = 0; i < val.length; i++) {
    playerValueTotal += val[i];
  }
  //ace separation
  let aces = [];
  aces = val.filter((card) => card === 11);
  // Reduce value only if needed
  if (aces.length == 1) {
    if (playerValueTotal > 21) {
      playerValueTotal -= 10;
    }
  } else if (aces.length == 2) {
    playerValueTotal -= 10;
    if (playerValueTotal > 21) {
      playerValueTotal -= 10;
    }
  } else if (aces.length > 2) {
    playerValueTotal -= 10;
    if (playerValueTotal > 21) {
      playerValueTotal -= 10;
    }
    if (playerValueTotal > 21) {
      playerValueTotal -= 10;
    }
  }
  return (playerPoint.innerText = playerValueTotal);
}



/*----dealerSide functions---*/

//close card distribution 
function cardPickDealer() {
  dealerAreaImage.innerHTML +=
    " " + '<img id="empty-image" src = "/card-erol/red.svg">';
  let randomDealerNumber = Math.floor(Math.random() * deck.length);
  let tempDealerCard = deck[randomDealerNumber];
  dealerAreaImage.innerHTML += " " + tempDealerCard.img;
  deck.splice(randomDealerNumber, 1);
  dealerValue.push(tempDealerCard.value);
  dealerHandTotal(dealerValue);
}

//closed card delete function
function deleteEmptyCard(){
  const emptyImage = document.getElementById("empty-image");
  emptyImage.remove();
}

function newCardDealer() {
  cardAudio()
  let randomDealerHandTurn = Math.floor(Math.random() * deck.length);
  let tempDealerHandTurn = deck[randomDealerHandTurn];
  dealerAreaImage.innerHTML += " " + tempDealerHandTurn.img;
  deck.splice(randomDealerHandTurn, 1);
  dealerValue.push(tempDealerHandTurn.value);
  dealerHandTotal(dealerValue);
}

function dealerHandTotal(val) {
  let dealerValueTotal = 0;
  for (let i = 0; i < val.length; i++) {
    dealerValueTotal += val[i];
  }
  //ace separation
  let aces = [];
  aces = val.filter((card) => card === 11);
  // Reduce value only if needed
  if (aces.length == 1) {
    if (dealerValueTotal > 21) {
      dealerValueTotal -= 10;
    }
  } else if (aces.length == 2) {
    dealerValueTotal -= 10;
    if (dealerValueTotal > 21) {
      dealerValueTotal -= 10;
    }
  } else if (aces.length > 2) {
    dealerValueTotal -= 10;
    if (dealerValueTotal > 21) {
      dealerValueTotal -= 10;
    }
    if (dealerValueTotal > 21) {
      dealerValueTotal -= 10;
    }
  }
  return (dealerPoint.innerText = dealerValueTotal);
}

/*------Button Functions------*/

//winning function

function gO(){
  if(dealerValueTotal>playerValueTotal){
    //dealer wins
    tokenValue = []
    betTotal.innerText = '0'
    playerLostAudio()
    // dealerWinMessage()
    dealerMsg.showModal()
    tokenEnable()
  }else if (dealerValueTotal===playerValueTotal){
    //game tie
    gameTieAudio()
    tokenValue = []
    walletAmount.innerText = Number(walletAmount.innerText)+Number(betTotal.innerText)
    betTotal.innerText = '0'
    // tieMessage()
    tieMsg.showModal()
    tokenEnable()
  }else{
    //player wins
    tokenValue = []
    walletAmount.innerText = Number(walletAmount.innerText)+Number(betTotal.innerText)*2
    betTotal.innerText = '0'
    // playerWinMessage()
    playerWinAudio()
    playerMsg.showModal()
    tokenEnable()
  }
}

//PLAY Button function

function start() {
  removeFinalMessage=false
  tokenActive = false
  emptyImageDeleted = false
  hitBtn.disabled = false;
  standBtn.disabled = false;
  resume.disabled = false;
  cardPickPlayer();
  cardPickPlayer();
  cardPickDealer();
  playerValueTotal=playerHandTotal(playerValue)
  if(playerValueTotal===21){
    playerHand21()
  }
  playerPoint.innerText = playerHandTotal(playerValue);
  dealerPoint.innerText = dealerHandTotal(dealerValue);
  tokenDisable()
}


//HIT Button function

function playerHand21 () {
  playerValueTotal=playerHandTotal(playerValue)
  dealerValueTotal=dealerHandTotal(dealerValue)
  if(playerValueTotal<21){
    cardPickPlayer()
  }
  playerValueTotal=playerHandTotal(playerValue)
  if(playerValueTotal>21){
    if(emptyImageDeleted==false){
      deleteEmptyCard()
      emptyImageDeleted=true
    }
    newCardDealer()
    tokenValue = []
    betTotal.innerText = '0'
    playerLostAudio()
    // dealerWinMessage()
    dealerMsg.showModal()
    tokenEnable()
  }
  if(playerValueTotal===21){
    if(emptyImageDeleted==false){
      deleteEmptyCard()
      emptyImageDeleted=true
    }
    newCardDealer()
    dealerValueTotal=dealerHandTotal(dealerValue)
    if(dealerValueTotal<21){
      playerHand21 ()
    }else if(dealerValueTotal===21){
      gO()
    }else if(dealerValueTotal>21){
      walletAmount.innerText = Number(walletAmount.innerText)+Number(betTotal.innerText)*2
      // playerWinMessage()
      playerMsg.showModal()
      playerWinAudio()
      tokenValue = []
      betTotal.innerText = '0'
      tokenEnable()
    }
    
  }
}

//STAND Button function

function dealerPointCheck(){
    if(emptyImageDeleted==false){
      deleteEmptyCard()
      emptyImageDeleted=true
    }
    newCardDealer()
    dealerValueTotal=dealerHandTotal(dealerValue)
    playerValueTotal=playerHandTotal(playerValue)
  if(dealerValueTotal<22){
    if(dealerValueTotal>16){
      gO()
    }else if (dealerValueTotal < 17){
        if(dealerValueTotal>playerValueTotal){
          gO()
        }else{
          dealerPointCheck()
        }
    }
  }else{
    walletAmount.innerText = Number(walletAmount.innerText)+Number(betTotal.innerText)*2
    // playerWinMessage()
    playerMsg.showModal()
    playerWinAudio()
    tokenValue = []
    betTotal.innerText = '0'
    tokenEnable()
  }
}

//RESUME GAME FUNCTION

function resumeGame() {
  if(emptyImageDeleted==true){
    emptyImageDeleted=false
  }
  dealerImagesRemove(dealerAreaImage)
  playerImagesRemove(playerAreaImage)
  cardPickPlayer();
  cardPickPlayer();
  cardPickDealer();
  tokenDisable();
    //if resume total 21 
    playerValueTotal=playerHandTotal(playerValue)
    if(playerValueTotal===21){
      if(emptyImageDeleted==false){
        deleteEmptyCard()
        emptyImageDeleted=true
      }
      newCardDealer()
      dealerValueTotal=dealerHandTotal(dealerValue)
      if(dealerValueTotal<21){
        playerHand21 ()
      }else if(dealerValueTotal===21){
        gO()
      }else if(dealerValueTotal>21){
        walletAmount.innerText = Number(walletAmount.innerText)+Number(betTotal.innerText)*2
        tokenValue = []
        playerWinAudio()
        betTotal.innerText = '0'
        // playerWinMessage()
        playerMsg.showModal()
        tokenEnable()
      }
    }
}


//TOKENS ACTION

tokens.forEach(token=>{
  token.addEventListener('click',e=>{
    if(e.target.classList.contains('token')){
      tokenValue.push(parseInt(e.target.id))
      tokenAudio()
      let tokenTotal = 0
      for (let i = 0; i < tokenValue.length; i++) {
        tokenTotal += tokenValue[i]
      }
      betTotal.innerText = tokenTotal
      let amountLeftOver = parseInt(walletAmount.innerText)-parseInt(e.target.id)
      walletAmount.innerText=amountLeftOver
      if(amountLeftOver<1000){
        playBtn.disabled = false;
      }
      if(amountLeftOver%10===0){

        if(amountLeftOver<200){
          token200.style.pointerEvents = 'none'
        }
        if(amountLeftOver<100){
          token100.style.pointerEvents = 'none'
        }
        if(amountLeftOver<50){
          token50.style.pointerEvents = 'none'
        }
        if(amountLeftOver<10){
          token10.style.pointerEvents = 'none'
        }
      }
    }
  })
})

//RESET GAME FUNCTION

function reset (){
  walletAmount.innerText = '1000'
  betTotal.innerText = '0'
  dealerImagesRemove(dealerAreaImage)
  playerImagesRemove(playerAreaImage)
  playerPoint.innerText = ""
  dealerPoint.innerText = ""
  playBtn.disabled = true;
  hitBtn.disabled = true;
  standBtn.disabled = true;
  resume.disabled = true;
  tokenEnable()
}

//token buttons enabling&disabling

function tokenDisable(){
  token10.disabled = true
  token50.disabled = true
  token100.disabled = true
  token200.disabled = true
}

function tokenEnable(){
  token10.disabled = false
  token50.disabled = false
  token100.disabled = false
  token200.disabled = false
}

//removing the images when the new game stars

function dealerImagesRemove(dealerArea){
  while(dealerArea.firstChild){
    dealerArea.removeChild(dealerArea.firstChild)
  }
  dealerValue = [0]
  dealerHandTotal(playerValue)
}

function playerImagesRemove(playerArea){
  while(playerArea.firstChild){
    playerArea.removeChild(playerArea.firstChild)
  }
  playerValue = [0]
  playerHandTotal(playerValue)
}

exitBtn.forEach(exit=>{
  exit.addEventListener('click',()=>{
    playerMsg.close()
    dealerMsg.close()
    tieMsg.close()
  })
})

/*Another way of opening the dialog*/

// function playerWinMessage() {
//   playerMsg.setAttribute('open',true)
//   const h1El = document.createElement('h1')
//   h1El.setAttribute('id','player-win')
//   const content = document.createTextNode('Player Wins The Game')
//   h1El.appendChild(content)
//   playerMsg.appendChild(h1El)
//   playerMsg.showModal()
// }

// function dealerWinMessage() {
//   dealerMsg.setAttribute('open',true)
//   const h1El = document.createElement('h1')
//   h1El.setAttribute('id','dealer-win')
//   const content = document.createTextNode('Dealer Wins The Game')
//   h1El.appendChild(content)
//   dealerMsg.appendChild(h1El)
//   dealerMsg.showModal()
// }

// function tieMessage() {
//   tieMsg.setAttribute('open',true)
//   const h1El = document.createElement('h1')
//   h1El.setAttribute('id','game-tie')
//   const content = document.createTextNode('Game is Tie')
//   h1El.appendChild(content)
//   tieMsg.appendChild(h1El)
//   tieMsg.showModal()
// }

/*------eventListeners------*/

standBtn.addEventListener("click", dealerPointCheck);
hitBtn.addEventListener("click", playerHand21);
playBtn.addEventListener("click", start);
resume.addEventListener('click',resumeGame)
resetBtn.addEventListener('click',reset)
