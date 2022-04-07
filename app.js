// GLOBAL VARIABLES ----->
deck = ['2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AH', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AC', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS', 'AS', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AD']

const p1Flip = document.querySelector('.p1Flip')
const p2Flip = document.querySelector('.p2Flip')
const p1Draw = document.querySelector('.p1Draw')
const p2Draw = document.querySelector('.p2Draw')
let card;


// GAME RULES ------>

// --> add event listening to Game Rules button on start screen that links to a 
//hidden div with game rules written out in <p> tag. 
//make this a nav bar page




// START BUTTON ----->

// use addeventlistener to link to page with main game board after user inputs name which 
//should print to the main game board under player 1. 

// Step one: get draw buttons to pull from deck array of 52 cards.




// GAMEBOARD ----->







// console.log(p1Result);

p2Draw.addEventListener('click', deckRandom2)
p1Draw.addEventListener('click', deckRandom)


function deckRandom (){
    for(let i = 0; i < deck.length; i++){
       let card = deck[Math.floor(Math.random() * deck.length)];
        console.log(card);
        p1Flip.innerHTML = card;

    }
    
}


function deckRandom2 (){
    for(let i = 0; i < deck.length; i++){
       let card = deck[Math.floor(Math.random() * deck.length)];
        console.log(card);
        p2Flip.innerHTML = card;

    }
    
}



class Players {
    constructor(name, cards=[], wins=0){
        this.name = name
        this.cards = cards
        this.wins = wins

    }
    getName(){
        return this.name;
    }
    getCards(){
        return this.cards;
    }
    getWins(){
        return this.wins;
    }
}





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