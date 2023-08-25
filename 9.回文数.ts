/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }
    let reminder = x % 10;
    x = (x - reminder) / 10;
    if (reminder === 0 && x > 0) {
        return false;
    }
    let reversal = reminder;
    while (x > reversal) {
        reminder = x % 10;
        reversal = reversal * 10 + reminder;
        x = (x - reminder) / 10;
    }

    return x === reversal || x === Math.floor(reversal / 10);
}
// @lc code=end
