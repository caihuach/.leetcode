/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    const n = prices.length;
    if (n < 2) {
        return 0;
    }
    const dp = new Array(n).fill(0);
    let minPrice = prices[0];
    for (let i = 1; i < n; i += 1) {
        dp[i] = Math.max(dp[i - 1], prices[i] - minPrice);
        minPrice = Math.min(minPrice, prices[i]);
    }
    return dp[n - 1];
}
// @lc code=end
