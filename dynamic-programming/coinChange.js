/**
 * https://leetcode.com/problems/coin-change/
 * 322. Coin Change
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const memo = {};
    
    const findMin = (total) => {
        if (total === 0) return 0;
        let min = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < coins.length; i++) {
            if (coins[i] === 0) continue;
            
            const next = total - coins[i];
            if (next >= 0) {
                let minTmp = memo[next];
                if (minTmp === undefined) {
                    minTmp = findMin(next) + 1;
                    memo[next] = minTmp;
                }
                min = Math.min(min, minTmp);
            }
        }
        return min;
    }
    
    let ans = findMin(amount);
    if (ans === Number.MAX_SAFE_INTEGER) ans = -1;
    
    return ans;
};