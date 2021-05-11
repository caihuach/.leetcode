/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 */

// @lc code=start
function isPalindrome(s: string): boolean {
    const refined = s.replace(/\W+|\_+/g, '').toLowerCase();
    if (!refined) {
        return true;
    }
    return isSymmetric(refined);
}

function isSymmetric(s: string): boolean {
    // console.log(s);
    const n = s.length;
    let i = Math.floor((n - 1) / 2);
    let j = Math.ceil((n - 1) / 2);
    while (i > -1) {
        if (s[i] !== s[j]) {
            return false;
        }
        i -= 1;
        j += 1;
    }
    return true;
}
// @lc code=end
