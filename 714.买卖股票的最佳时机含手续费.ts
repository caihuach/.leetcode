/*
 * @lc app=leetcode.cn id=714 lang=typescript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
function maxProfit(prices: number[], fee: number): number {
    const { max } = Math;
    // base case i=-1
    let dpi0 = 0,
        dpi1 = Number.MIN_SAFE_INTEGER;

    for (const price of prices) {
        // 假设卖出扣手续费
        [dpi0, dpi1] = [max(dpi0, dpi1 + price - fee), max(dpi1, dpi0 - price)];
    }

    return dpi0;
}
// @lc code=end
