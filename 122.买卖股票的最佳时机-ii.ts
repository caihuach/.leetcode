/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start

const { max } = Math;

function maxProfit(prices: number[]): number {
    const n = prices.length;

    let dp_i_0 = 0,
        dp_i_1 = -prices[0];

    for (let i = 1; i < n; i += 1) {
        // 空仓，持仓
        [dp_i_0, dp_i_1] = [
            max(dp_i_0, dp_i_1 + prices[i]),
            max(dp_i_1, dp_i_0 - prices[i]),
        ];
    }
    return dp_i_0;
}

// @lc code=end
