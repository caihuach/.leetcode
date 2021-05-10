/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
    let flag = 1;
    for (let i = digits.length - 1; i > -1; i -= 1) {
        if (!flag) {
            return digits;
        }
        const digit = digits[i] + flag;
        if (digit !== 10) {
            digits[i] = digit;
            flag = 0;
        } else {
            digits[i] = 0;
            flag = 1;
        }
    }
    if (flag) {
        digits.unshift(1);
        flag = 0;
    }
    return digits;
}
// @lc code=end
