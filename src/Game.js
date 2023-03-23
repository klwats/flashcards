const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('./Card');
const Deck = require('./Deck.js');
const Round = require('./Round.js');

class Game {
  constructor() {
    this.currentRound;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  createCards() {
    const questions = prototypeQuestions.map((question) => {
      const cards = new Card(question['id'], question['question'], question['answers'], question['correctAnswer']);
      return cards
    })
    return questions
  }

  createDeck() {
    return new Deck(this.createCards());
  }

  createRound() {
    this.currentRound = new Round(this.createDeck());
    return this.currentRound
  }

  start() {
    this.printMessage(this.createDeck(), this.createRound());
    this.printQuestion(this.createRound())

  }
}

module.exports = Game;