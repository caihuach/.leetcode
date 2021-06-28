/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    const n = prices.length;
    // 初始化状态
    let dp_i_0 = 0,
        dp_i_1 = -prices[0];
    for (let i = 1; i < n; i += 1) {
        // 空仓
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
        // 持仓
        // 只能买一次
        dp_i_1 = Math.max(dp_i_1, -prices[i]);
    }
    return dp_i_0;
}
// @lc code=end
