var maxProfit = function(prices) {
    let minPrice = Infinity; // We don't which value is min price, to buy.
    let maxPrice = 0; // Posibility of getting profits is 0;
    for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        maxPrice = Math.max(maxPrice, price - minPrice);
    }
    return maxPrice;
};

prices = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices));