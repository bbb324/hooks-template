let sum = 0;
let curMin = prices[0];
for(let i = 1; i < prices.length; i++) {
    curMin = Math.min(prices[i], curMin);
    sum = Math.max(prices[i] - curMin, sum);
}
