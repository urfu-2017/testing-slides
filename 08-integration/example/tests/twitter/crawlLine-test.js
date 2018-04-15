const sinon = require('sinon');
const assert = require('assert');
const crawlLine = require('../../twitter/crawlLine');

describe('crawlLine', () => {
    let clock;

    beforeEach(() => {
        sinon.spy(process.stdout, 'write');
        clock = sinon.useFakeTimers();
    });

    afterEach(() => {
        process.stdout.write.restore();
        clock.restore();
    });

    it('should print letters one by one', function (done) {
        crawlLine('I don’t always bend time and ' +
            'space in unit tests, but when I do, ' +
            'I use Buster.JS + Sinon.JS', () => {
            assert.equal(process.stdout.write.callCount, 91);
            done();
        });

        clock.tick(10000);
    });
});