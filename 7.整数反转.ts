/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
function reverse(x: number): number {
    // 2147483647
    const MAX = 2 ** 30 - 1 + 2 ** 30;
    const MAX_QUOTIENT = (MAX / 10) | 0;
    // -2147483648
    const MIN = -(2 ** 31);
    const MIN_QUOTIENT = (MIN / 10) | 0;
    const sign = Math.sign(x);
    let res = 0;
    while (x !== 0) {
        if (sign === 1) {
            if (res > MAX_QUOTIENT) {
                return 0;
            }
        } else {
            if (res < MIN_QUOTIENT) {
                return 0;
            }
        }
        res = res * 10 + (x % 10);
        x = (x / 10) | 0;
    }
    return res;
}

// @lc code=end
