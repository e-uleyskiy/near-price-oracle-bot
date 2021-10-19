const Binance = require('binance-api-node').default

module.exports = {
    getPrices: async function (coins) {
        const client = Binance();

        let tickers_to_process = Object.keys(coins)
            .filter(ticker => coins[ticker].binance);

        const prices = await client.futuresPrices();

        return tickers_to_process.reduce((object, ticker) => {
            object[ticker] = parseFloat(prices[coins[ticker].binance]);
            return object
        }, {});
    }
}