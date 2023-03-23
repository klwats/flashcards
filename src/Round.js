const Turn = require("./Turn");
const Deck = require("./Deck")


class Round {
    constructor(deck) {
        this.deck = deck;
        this.incorrectGuesses = [];
        this.turns = 0;
        this.currentCard = deck.cards[this.turns]
    }

    returnCurrentCard() {
        return this.currentCard
    }

    takeTurn(guess) {
        let turn = new Turn(guess, this.currentCard)
        this.turns++;
        this.currentCard = this.deck.cards[this.turns]
        if (!turn.evaluateGuess()) {
            this.incorrectGuesses.push(this.deck.cards.id)
        }
        return turn.givesFeedback();
    }

    calculatePercentCorrect() {
        return Math.ceil((this.turns - this.incorrectGuesses.length) / (this.turns) * 100)
    }

    endRound() {
        const ending = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
        console.log(ending);
        return ending
    }
}

module.exports = Round