/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
    if (n < 3) {
        return n;
    }
    let a = 1;
    let b = 2;
    for (let i = 3; i <= n; i += 1) {
        [a, b] = [b, a + b];
    }
    return b;
}
// @lc code=end
