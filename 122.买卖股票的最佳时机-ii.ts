/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start

const { max } = Math;

function maxProfit(prices: number[]): number {
    const n = prices.length;
    if (n < 2) {
        return 0;
    }

    let res = 0;
    for (let i = 1; i < n; i += 1) {
        res += max(0, prices[i] - prices[i - 1]);
    }
    return res;
}

// @lc code=end
