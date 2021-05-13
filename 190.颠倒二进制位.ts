/*
 * @lc app=leetcode.cn id=190 lang=typescript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
function reverseBits(n: number): number {
    const rn = n.toString(2).padStart(32, '0').split('').reverse().join('');

    return parseInt(rn, 2);
}
// @lc code=end
