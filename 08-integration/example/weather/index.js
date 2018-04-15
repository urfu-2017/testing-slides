const got = require('got');
const url = 'https://api.weather.yandex.ru/v1/forecast';

module.exports = function getFactTemp() {
    return got(url, { json: true })
        .then(res => res.body.fact.temp);
};
