/*
 * @lc app=leetcode.cn id=58 lang=typescript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
    let flag = false;
    let length = 0;
    for (let i = s.length - 1; i > -1; i -= 1) {
        const char = s[i];
        if (char === ' ') {
            if (flag) {
                break;
            }
        } else {
            length += 1;
            flag = true;
        }
    }
    return length;
}
// @lc code=end
