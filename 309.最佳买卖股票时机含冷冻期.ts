/*
 * @lc app=leetcode.cn id=309 lang=typescript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    const n = prices.length;
    if (n < 2) {
        return 0;
    }
    const { max } = Math;
    let dpi0 = 0,
        dpi1 = Number.MIN_SAFE_INTEGER;
    // dp[i-2][0]
    let dppre0 = 0;
    for (let i = 0; i < n; i += 1) {
        const dpi0temp = dpi0;
        dpi0 = max(dpi0, dpi1 + prices[i]);
        dpi1 = max(dpi1, dppre0 - prices[i]);
        dppre0 = dpi0temp;
    }
    return dpi0;
}
// @lc code=end
