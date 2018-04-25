describe('Проверка страницы расписания поездов:', () => {
    it('должен отображаться футер', async function() {
        const browser = this.browser;
        const url = 'https://rasp.yandex.ru/trains';

        await browser.url(url);
        await browser.assertView('plain',
            '.LandingFooter', {
            ignoreElements: [
                '.Footer__copyright'
            ]
        });
    });
});
