// GLOBAL VARIABLES ----->

let suit = ['H', 'C', 'D', 'S'];
let rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let score = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,

}

deck = []

const p1Flip = document.querySelector('.p1Flip')
const p2Flip = document.querySelector('.p2Flip')
const p1Draw = document.querySelector('.p1Draw')
const p2Draw = document.querySelector('.p2Draw')

let card;
// let cards;
let player1Card;
let player2Card;
let clicks = 0

let draw1 = false;
let draw2 = false;

const shuffle = document.querySelector('.shuffle')
const winner = document.querySelector('.winner')
const replay = document.querySelector('.replay')

let play1Deck = [];
let play2Deck = [];

let drawPile = [];
let roundDraw1;
let roundDraw2;
let roundWin;

const p1Cards = document.querySelector('.p1Cards');

const p2Cards = document.querySelector('.p2Cards');

const flipCount = document.querySelectorAll('#flip')

let roundsPlayed = 0
const rounds = document.querySelector('.rounds')

const cardImage1 = document.querySelector('.card1');
const cardImage2 = document.querySelector('.card2');


// Build Decks ----->



for (let i = 0; i < suit.length; i++){
    // console.log(suit[i]) 
    for(let j = 0; j < rank.length; j++){
        let cards = {
            suit: suit[i],
            rank: rank[j],
            score: score[rank[j]]
        }
        deck.push(cards)
    }
}
console.log(deck);


// GAMEBOARD ----->


//Shuffle and dealing the deck ----->




shuffle.addEventListener('click', shuffleDeck);

function shuffleDeck (){
    for(let i = 0; i < 26; i++){
        let player1Card = deck.splice(Math.floor(Math.random()* deck.length), 1)[0];
        let player2Card = deck.splice(Math.floor(Math.random()* deck.length), 1)[0];
        
        play1Deck.push(player1Card);
        play2Deck.push(player2Card);
        shuffle.classList.add('hide');
        cardImage1.classList.remove('hide');
        cardImage2.classList.remove('hide');    

        
        
    }
    console.log(play1Deck);
    console.log(play2Deck);
    
}

// FLipping Cards ----->

p2Draw.addEventListener('click', p2DrawCard)
p1Draw.addEventListener('click', p1DrawCard)

function p1DrawCard(){

    p1Flip.innerHTML = `${play1Deck[0].rank} ${play1Deck[0].suit}`

}

function p2DrawCard(){

    p2Flip.innerHTML = `${play2Deck[0].rank} ${play2Deck[0].suit}`

}


        
// Declare Round Winner ----->
        

        
function roundWinner(){
    if(play1Deck[0].score > play2Deck[0].score){

        let roundDraw1 = play1Deck.splice(0,1);
        let roundDraw2 = play2Deck.splice(0,1);

        drawPile.push(roundDraw1[0]);
        drawPile.push(roundDraw2[0]);
        
        let roundWin = drawPile.splice(0,2);
        
        play1Deck.push(roundWin[0]);
        play1Deck.push(roundWin[1]);
        
        
        console.log(roundDraw1[0])
        console.log(roundDraw2[0])



        console.log(play1Deck);
        console.log(play2Deck);
        
    }else if(play2Deck[0].score > play1Deck[0].score){
        
        let roundDraw1 = play1Deck.splice(0,1)
        let roundDraw2 = play2Deck.splice(0,1)
        
        drawPile.push(roundDraw1[0]);
        drawPile.push(roundDraw2[0]);
        
        let roundWin = drawPile.splice(0,2);
        
        play2Deck.push(roundWin[0]);
        play2Deck.push(roundWin[1]);

        console.log(roundDraw1[0])
        console.log(roundDraw2[0])
        // play2Deck.flat(2);
        console.log(play1Deck);
        console.log(play2Deck);
        
        
    }else{

        let roundDraw1 = play1Deck.splice(0,1);
        let roundDraw2 = play2Deck.splice(0,1);

        drawPile.push(roundDraw1[0]);
        drawPile.push(roundDraw2[0]);
        
        let roundWin = drawPile.splice(0,2);
        
        play1Deck.push(roundWin[0]);
        // play1Deck.flat(2);
        play2Deck.push(roundWin[1]);
        // play2Deck.flat(2);
        // console.log(roundDraw1[0])
        // console.log(roundDraw2[0])

        // console.log(play1Deck);
        // console.log(playDeck);
    }
    p1CardCount();
    p2CardCount();


}


// Keeping count of Cards ------>



function p1CardCount(){
    p1Cards.innerHTML = `Player 1 Arsenal: ${play1Deck.length}`;
}

function p2CardCount(){
    p2Cards.innerHTML = `Player 2 Arsenal: ${play2Deck.length}`
}

// add round counter functions ---->




flipCount[0].addEventListener('click', clicked)
flipCount[1].addEventListener('click', clicked2)

function clicked(){
    draw1 = true;
    // draw2 = true;
    console.log(`draw1 = ${draw1}`);
    roundCounter();
}

function clicked2(){
    draw2 = true;
    console.log(`draw2 = ${draw2}`);
    roundCounter();
}

function roundCounter(){
    if (draw1 == true && draw2 == true){
        clicks +=1;
        console.log(clicks);
        calcWin();
    }
}



function calcWin(){
    if(clicks === 1){
        roundWinner();
         draw1 = false;
         draw2 = false;
         clicks = 0;
         roundsPlayed++
         console.log(`rounds played = ${roundsPlayed}`);
         rounds.innerHTML = `Battles Fought = ${roundsPlayed}`;
         declareWinner();
         
      

    }
}


// Game Winner Function ----->



function declareWinner(){
    if(roundsPlayed === 10){
        gameResults();
    }
}

function gameResults(){
    if(play1Deck.length > play2Deck.length){
        winner.innerHTML = 'PLAYER 1 WINS!!!';
        winner.classList.remove('hide');
        replay.classList.remove('hide');
        p1Draw.classList.add('hide');
        p2Draw.classList.add('hide');

        
    }else if(play2Deck.length > play1Deck.length){
        winner.innerHTML = 'Player 2 WINS!!!';
        winner.classList.remove('hide');
        replay.classList.remove('hide');
        p1Draw.classList.add('hide');
        p2Draw.classList.add('hide');

    }else{

        winner.classList.remove('hide');
        replay.classList.remove('hide');
        p1Draw.classList.add('hide');
        p2Draw.classList.add('hide');
        winner.innerHTML = "It's a TIE!!!";
    }

}

// Play Again ----->

replay.addEventListener('click', playAgain)

function playAgain(){
    location.reload();
}



//Tie Battle ----->

//round function unhides a war button, in tie conditional.

//add event listener to War Battle Button that draws 4 cards from each players deck then compares 4th card, adding all 8 to back of winners deck.

// const warButton = document.querySelector('.warBattle');


// const battle = document.querySelector('.Battle');

// warButton.addEventListener('click', flipBoth);

// function flipBoth(){

//     p1Flip.innerHTML = `${play1Deck[4].rank} ${play1Deck[4].suit}`
//     p2Flip.innerHTML = `${play2Deck[4].rank} ${play2Deck[4].suit}`
//     warBattle();

// }

// function warBattle(){
//     if(play1Deck[4].score > play2Deck[4].score){
//         winner.classList.remove('hide');
//         winner.innerHTML = 'Player 1 Wins the Battle'
//         let roundDraw1 = play1Deck.splice(0,5)
//         let roundDraw2 = play2Deck.splice(0,5)

//         drawPile.push(roundDraw1[0])
//         drawPile.push(roundDraw1[1])
//         drawPile.push(roundDraw1[2])
//         drawPile.push(roundDraw1[3])
//         drawPile.push(roundDraw1[4])
        
//         drawPile.push(roundDraw2[0])
//         drawPile.push(roundDraw2[1])
//         drawPile.push(roundDraw2[2])
//         drawPile.push(roundDraw2[3])
//         drawPile.push(roundDraw2[4])
       
//         console.log(drawPile)
        
//         let roundWin = drawPile.splice(0,10);

//         play1Deck.push(roundWin[0])
//         play1Deck.push(roundWin[1])
//         play1Deck.push(roundWin[2])
//         play1Deck.push(roundWin[3])
//         play1Deck.push(roundWin[4])
//         play1Deck.push(roundWin[5])
//         play1Deck.push(roundWin[6])
//         play1Deck.push(roundWin[7])
//         play1Deck.push(roundWin[8])
//         play1Deck.push(roundWin[9])

//         console.log(play1Deck);

//     }else if(play1Deck[4].score < play2Deck[4].score){
//         winner.classList.remove('hide');
//         winner.innerHTML = 'Player 2 Wins the Battle'

//         let roundDraw1 = play1Deck.splice(0,5)
//         let roundDraw2 = play2Deck.splice(0,5)

//         drawPile.push(roundDraw1[0])
//         drawPile.push(roundDraw1[1])
//         drawPile.push(roundDraw1[2])
//         drawPile.push(roundDraw1[3])
//         drawPile.push(roundDraw1[4])
        
//         drawPile.push(roundDraw2[0])
//         drawPile.push(roundDraw2[1])
//         drawPile.push(roundDraw2[2])
//         drawPile.push(roundDraw2[3])
//         drawPile.push(roundDraw2[4])
       
//         console.log(drawPile)
        
//         let roundWin = drawPile.splice(0,10);

//         play2Deck.push(roundWin[0])
//         play2Deck.push(roundWin[1])
//         play2Deck.push(roundWin[2])
//         play2Deck.push(roundWin[3])
//         play2Deck.push(roundWin[4])
//         play2Deck.push(roundWin[5])
//         play2Deck.push(roundWin[6])
//         play2Deck.push(roundWin[7])
//         play2Deck.push(roundWin[8])
//         play2Deck.push(roundWin[9])

//         console.log(play2Deck);

//     }
//     p1CardCount();
//     p2CardCount();
// }

// ^^ hide flip buttons, display card index 4 in flip




//REFERENCES: 

//https://www.w3schools.com/jsref/met_loc_reload.asp