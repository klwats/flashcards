const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');
const Turn = require('../src/Turn.js');
const Round = require('../src/Round.js');

describe('Round', function () {
    let round;
    let deck;
    let turn;

    this.beforeEach(function () {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

        deck = new Deck([card1, card2, card3]);
        round = new Round(deck);
        turn = new Turn('sea otter', card1);
    })

    it('should be a function', function () {
        expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', function () {
        expect(round).to.be.an.instanceof(Round);
    });

    it('should store a deck', function () {
        expect(round.deck.cards[0].id).to.equal(1);
    });

    it('should keep track of incorrect guesses', function () {
        round.takeTurn('purple');
        round.takeTurn('potato');

        expect(round.incorrectGuesses.length).to.equal(2)
    })

    it('should keep track of the number of turns taken', function () {
        round.takeTurn('green');
        round.takeTurn('Beyonce');

        expect(round.turns).to.equal(2)
    })

    it('should keep track of the current card', function () {
        round.takeTurn('The Office');

        expect(round.currentCard.id).to.equal(14)
    })

    it('should have a method that returns the current card', function () {
        expect(round.returnCurrentCard()).to.deep.equal(round.deck.cards[0])
    })

    it('should have a method that notifies if guess is right', function () {
        expect(round.takeTurn('sea otter')).to.equal('Correct')
    })

    it('should have a method that calculates the percent correct', function () {
        round.takeTurn('sea otter')
        round.takeTurn('RuPaul')
        round.takeTurn('playing with bubble wrap')

        expect(round.calculatePercentCorrect()).to.equal(67)
    })

    it('should have a method that tells the player what percent they got correct', function () {
        round.takeTurn('sea otter')

        expect(round.endRound()).to.equal(console.log(`** Round over! ** You answered 100% of the questions correctly!`))
    })
})
