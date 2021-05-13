/*
 * @lc app=leetcode.cn id=172 lang=typescript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
function trailingZeroes(n: number): number {
    let res = 0;
    let quotient = n;
    while (quotient) {
        quotient = Math.floor(quotient / 5);
        res += quotient;
    }

    return res;
}
// @lc code=end
