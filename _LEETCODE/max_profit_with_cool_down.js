/**
 * @lv 🔴
 * @link https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
 * @name 309. Best Time to Buy and Sell Stock with Cooldown
 * @cate #states_control, #editor_pick
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let hold = Number.MIN_SAFE_INTEGER, sold = 0, cool = 0;
    for (let i = 0; i < prices.length; i++) {
        let preHold = hold,
            preSold = sold,
            preCool = cool;
        
        hold = Math.max(preHold, preCool - prices[i]);
        sold = preHold + prices[i];
        cool = Math.max(preCool, preSold);
    }
    return Math.max(sold, cool);
};