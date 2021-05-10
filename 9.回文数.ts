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
    if (x < 10) {
        return true;
    }
    if (x % 10 === 0) {
        return false;
    }

    let y = x;
    let revY = 0;

    while (y > revY) {
        revY = revY * 10 + (y % 10);
        y = Math.floor(y / 10);
    }

    return y === revY || y === Math.floor(revY / 10);
}

// @lc code=end
