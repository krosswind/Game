function viewModel() {
var self = this;

//Create a deck of 52 cards
var deckOfCards = [];
for (i=0; i < 51; i++) {
    deckOfCards[i] = i;
}

// The randomizer
var random = function () {
    var position = Math.floor(Math.random() * deckOfCards.length +1);
    return parseInt(deckOfCards.splice(position,1));
};



//returns the face value of the card
var getValue = function (card) {
    return card % 13;
};

//returns the suit
var getSuit = function (card) {
    var suit =["Spades","Diamonds","Hearts","Clubs"];
    return suit[Math.floor(card/13)];
};

// add score of player no matter how many cards they have
var score = function (player) {
    var score = 0;

    for (i=0; i< player.length; i++) {
        score = score + getValue(player[i]);
    }
    if (score > 21) {
        return 0;
    }
    return score;
};


// player1
var play = function (player) {
    for (i=0; i !== 99; i++) {
        player[i] = random();

    var answer = confirm("You have been dealt " + getValue(player[i]) + " of " + getSuit(player[i]) + " do you want another card?" );
        if (answer){

        }
        else {
            i = 98;

        }
}
};


var player1 = [];
play(player1);

for (i=0; i < player1.length; i++) {
console.log(getValue(player1[i]) + " of " + getSuit(player1[i]));
}
console.log("Total score for Player 1 is " + score(player1));





 
};


// Knockout Examples
/*

function createAPerson(name, age) {
	this.name = name;
	this.age = age;
}

self.people = ko.observableArray([
	new createAPerson("James", 32),
	new createAPerson("Frank", 31)

]);
*/