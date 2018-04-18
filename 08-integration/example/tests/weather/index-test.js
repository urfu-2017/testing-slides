const assert = require('assert');
const nock = require('nock');
const getWeather = require('../../weather');

describe('getFactTemp', () => {
    beforeEach(() => {
        nock('https://api.weather.yandex.ru')
            .get('/v1/forecast')
            .reply(200, { fact: { temp: 2 } });
    });

    afterEach(() => {
        nock.cleanAll();
    });

    it('should get fact temperature [done]', done => {
        getWeather()
            .then(actual => assert.equal(actual, 2))
            .then(done, done);
    });

    it('should get fact temperature [pomise]', () => {
        return getWeather()
            .then(actual => assert.equal(actual, 2));
    });

    it('should get fact temperature [async/await]', async () => {
        const actual = await getWeather();

        assert.equal(actual, 2);
    });

    it('should get fact temperature [integration]', async () => {
        const actual = await getWeather();

        assert(Number.isInteger(actual));
    });
});
