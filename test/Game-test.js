const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Round = require('../src/Round.js');
const Game = require('../src/Game.js');

describe('Game', function () {
    let card;
    let deck;
    let game;
    let round;

    this.beforeEach(function () {
        card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
        deck = new Deck(card)
        round = new Round(deck)
        game = new Game()
    })

    it('should have a method that creates the cards', function () {
        game.createCards()
        expect(game.createCards().length).to.equal(30)
    })

    it('should have a method that creates a deck', function () {
        game.createDeck();
        expect(game.createDeck().cards.find(card => card.id === 23)).to.deep.equal({
            "id": 23,
            "question": "Which prototype method can make a copy of a pre-existing object or merge two or more objects together?",
            "answers": ["Object.assign()", "Object.keys()", "filter()"],
            "correctAnswer": "Object.assign()"
        })
    })

    it('should have a method that creates a round', function () {
        game.createRound();
        expect(game.createRound().turns).to.equal(0)
    })
})