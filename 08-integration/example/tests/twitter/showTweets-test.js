const sinon = require('sinon');
const assert = require('assert');
const showTweets = require('../../twitter/showTweets');

describe('showTweets', () => {
    beforeEach(() => {
        sinon.spy(console, 'log');
    });

    afterEach(() => {
        console.log.restore();
    });

    it('should print tweet text', () => {
        showTweets();

        assert.equal(console.log.callCount, 2);
        assert.deepEqual(
            console.log.getCall(0).args,
            ['Для подмены сетевых запросов удобно использовать #nock']
        )
    });

    it('spy ordering', () => {
        const first = sinon.spy();
        const second = sinon.spy();
        const third = sinon.spy();

        first();
        second();
        third();

        assert.ok(first.calledBefore(third));
        assert.ok(first.calledImmediatelyBefore(second));
    });
});