/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
    const dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for (let i = 1; i < dp.length; i += 1) {
        // 辅助min()
        for (const coin of coins) {
            const diff = i - coin;
            if (diff < 0) {
                continue;
            }
            dp[i] = Math.min(dp[i], dp[diff] + 1);
        }
    }
    return dp[amount] === amount + 1 ? -1 : dp[amount];
}

// @lc code=end
