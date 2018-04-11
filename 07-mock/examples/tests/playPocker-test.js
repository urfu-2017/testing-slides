const proxyquire = require('proxyquire');
const assert = require('assert');
const mockery = require('mockery');

describe('playPoker', () => {
    describe('proxyquire', () => {
        it('should return `Ничья` for equal combinations', () => {
            const playPoker = proxyquire('../lib/playPoker', {
                './getPokerHand': () => 'Пара'
            });
            const actual = playPoker();

            assert.equal(actual, 'Ничья');
        });

        it('should return `Первый` when first hand great', () => {
            const answers = ['Каре', 'Тройка'];
            const playPoker = proxyquire('../lib/playPoker', {
                './getPokerHand': () => answers.shift()
            });
            const actual = playPoker();

            assert.equal(actual, 'Первый');
        });
    });

    describe('mockery', () => {
        it('should return `Ничья` for equal combinations', () => {
            mockery.registerMock('./getPokerHand', () => 'Пара');
            mockery.enable();

            const playPoker = require('../lib/playPoker');
            const actual = playPoker();

            assert.equal(actual, 'Ничья');

            mockery.disable();
        });
    });
});
