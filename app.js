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

// GAME RULES ------>

// --> add event listening to Game Rules button on start screen that links to a 
//hidden div with game rules written out in <p> tag. 
//make this a nav bar page




// START BUTTON ----->

// use addeventlistener to link to page with main game board after user inputs name which 
//should print to the main game board under player 1. 

// Step one: get draw buttons to pull from deck array of 52 cards.




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

        drawPile.push(roundDraw1);
        drawPile.push(roundDraw2);
        
        let roundWin = drawPile.splice(0,2);
        
        play1Deck.push(roundWin[0]);
        play1Deck.push(roundWin[1]);
        
        
    }else if(play2Deck[0].score > play1Deck[0].score){
        
        let roundDraw1 = play1Deck.splice(0,1)
        let roundDraw2 = play2Deck.splice(0,1)
        
        drawPile.push(roundDraw1);
        drawPile.push(roundDraw2);
        
        let roundWin = drawPile.splice(0,2);
        
        play2Deck.push(roundWin[0]);
        play2Deck.push(roundWin[1]);
        
        
    }else{

        let roundDraw1 = play1Deck.splice(0,1);
        let roundDraw2 = play2Deck.splice(0,1);

        drawPile.push(roundDraw1);
        drawPile.push(roundDraw2);
        
        let roundWin = drawPile.splice(0,2);
        
        play1Deck.push(roundWin[0]);
        play2Deck.push(roundWin[1]);
        
    }
    p1CardCount();
    p2CardCount();


}


// Keeping count of Cards ------>



function p1CardCount(){
    p1Cards.innerHTML = `Player 1 Cards: ${play1Deck.length}`;
}

function p2CardCount(){
    p2Cards.innerHTML = `Player 2 Cards: ${play2Deck.length}`
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
         rounds.innerHTML = `rounds played = ${roundsPlayed}`;
         declareWinner();
         
      

    }
}


// Game Winner Function ----->



function declareWinner(){
    if(roundsPlayed === 5){
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



// class Players {
//     constructor(name, cards=[], wins=0){
//         this.name = name
//         this.cards = cards
//         this.wins = wins

//     }
//     getName(){
//         return this.name;
//     }
//     getCards(){
//         return this.cards;
//     }
//     getWins(){
//         return this.wins;
//     }
// }





// This is where all the action happens, before starting player two will have a field to 
//fill out their name and initiate gameplay.  after play two initiates cards will be dealt.


// dIVS for  player one and two will have image of cards, flipped cards will display in
//the battlezone.  will need to an array for deck of cards, then a loop to to iterate 
//through the array and randomly give every other card to player one and player two. 

//the cards will then be stored in the player constructor objects. 
//flip card button will drawer from player deck (living in constructor object), and
//display them in the battle zone. 

//battle zone DIV will need a function to determine highest card.  will need coniditionals
//that gives the player with the highest all the card within the battlezone, and add them 
//to their deck/object. 
//will also need a tie coniditional which requires players to flip again, drawing 3 facedown
// cards from their decks, and one faceupcard to determine winner of 'war'.  

//and another conditional which initiates another round of war upon a tie, and last conditional which 
// determines a winner if one players runs out of cards during 'war'.  

//after war will need to call a function to go back into regular gameplay if neither play runs out
//of cards.  this is now a stretch goal 

// END OF GAME ----->


//write a function that determines if eithe player has run out of cards, and declare a winner. 




// Play Again ----->

//after the winner is determined I will want a hidden button to unhide with and option to play again
//this should start us back at the original gameboard with a newly shuffled deck that is dealt out.
//players names should remain the same. 


// other Notes ----->

// I think using class type objects and arrays will be my main methods used for storing player and card
// deck information in this game.  I'll need to use loops and functions to access and manipulate this
// data. 


//REFERENCES: 

//https://www.w3schools.com/jsref/met_loc_reload.asp