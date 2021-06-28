/*
 * @lc app=leetcode.cn id=188 lang=typescript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
function maxProfit(k: number, prices: number[]): number {
    const n = prices.length;
    if (!n) {
        return 0;
    }
    const { max } = Math;
    const maxK = k;

    const dp: [number, number][][] = [];
    for (let i = 0; i < n; i += 1) {
        // 初始化dp[i][0]
        dp.push([]);
        for (let k = 0; k <= maxK; k += 1) {
            if (!k) {
                // k=0是固定值
                dp[i].push([0, -Infinity]);
            } else {
                if (!i) {
                    // base case
                    // [0, -prices[0]]
                    dp[i].push([0, -prices[i]]);
                } else {
                    dp[i].push([
                        max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i]),
                        max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i]),
                    ]);
                }
            }
        }
        // console.dir(dp);
    }
    return dp[n - 1][maxK][0];
}
// @lc code=end
