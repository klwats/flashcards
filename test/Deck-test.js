const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');

describe('Deck', function () {
    let deck;

    this.beforeEach(function () {
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
        deck = new Deck([card1, card2, card3])
    })

    it('should be a function', function () {
        expect(Deck).to.be.a('function');
    });

    it('should be an instance of Deck', function () {
        expect(deck).to.be.an.instanceof(Deck);
    });

    it('should store an array of cards', function () {
        expect(deck.cards.length).to.equal(3)
    })

    it('should have a method that counts the number of cards in the deck', function () {
        expect(deck.countCards()).to.equal(3)
    })
})