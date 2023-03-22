const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card.js');
const Turn = require('../src/Turn.js');

describe('Turn', function () {
    let card;
    let turn;

    this.beforeEach(function () {
        turn = new Turn('pug', card);
        card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    })

    it('should be a function', function () {
        expect(Turn).to.be.a('function')
    })

    it('should instantiate a new instance of the Turn class', function () {
        expect(turn).to.be.an.instanceOf(Turn)
    })

    it('should store a guess', function () {
        expect(turn.guess).to.equal('pug')
    })

    it('should store a card', function () {
        expect(card.id).to.equal(1);
        expect(card.correctAnswer).to.equal('sea otter')
    })

    it('should have a method that returns the guess', function () {
        expect(turn.returnGuess()).to.equal('pug')
    })

    it('should have a method that returns the card', function () {
        expect(turn.returnCard()).to.equal(turn.card)
    })

    it('should have a method that evaluates if guess is correct', function () {
        expect(turn.evaluateGuess()).to.equal(false)
    })

    it('should have a method that alerts the player if they are correct or incorrect', function () {
        expect(turn.givesFeedback()).to.equal('Incorrect')
    })
})

