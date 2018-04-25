const assert = require('assert');

function checkPrices(prices) {
    let min = 0;

    prices.forEach(price => {
        let curPrice = Number(price.replace(/\D+/g, ''))

        assert(curPrice >= min, 'Каждая последующая цена' +
            ' должна быть больше предыдущей');

        min = curPrice;
    })
}

describe('Проверка страницы расписания поездов:', () => {
    it('должны отображаться цены в порядке возрастания' +
        ' при сортировке по цене', async function() {
        const browser = this.browser;
        const url = 'https://rasp.yandex.ru/trains';

        await browser.url(url);
        await browser.setValue('#to', 'Екатеринбург');
        await browser.click('.SearchForm__submit');
        await browser.waitForVisible('.Overlay__container', 5000, true);
        await browser.click('.SearchSorting__field button');
        await browser.waitForVisible('[data-value=price]', 1000);
        await browser.click('[data-value=price]');

        const prices = await browser.getText('.TariffsListItem__price');

        checkPrices(prices);
    });
});
