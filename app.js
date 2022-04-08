// GLOBAL VARIABLES ----->
deck = [1,2,3,4,5,6,7,8,9,10,11,12,13]

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
let player1Card;

function deckRandom (){
    for(let i = 0; i < deck.length; i++){
       let player1Card = deck[Math.floor(Math.random() * deck.length)];
        // console.log(card[i]);
        p1Flip.innerHTML = player1Card;
       
        


    }
    
}
let player2Card;

function deckRandom2 (){
    for(let i = 0; i < deck.length; i++){
       let player2Card = deck[Math.floor(Math.random() * deck.length)];
       p2Flip.innerHTML = player2Card;
    //    let player2Card = card[i];
       

    //    console.log(card);
       
    }
    
}

// Declare Winner ----->



function winner(){
   console.log('declare winner!')
}


// add round counter functions ---->

 const flipCount = document.querySelectorAll('#flip')
console.log(flipCount);

 let clicks = 0

 let draw1 = false;
 let draw2 = false;

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
        winner();
         draw1 = false;
         draw2 = false;
         clicks = 0;
      

    }
}
      
        

//    roundCounter();
// flipCount[0].onclick = function count(){
 
//         clicks +=1;
//         console.log(clicks);

// }

// flipCount[1].onclick = function count2(){
//     clicks += 1;
//     console.log(clicks)
// }

    


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