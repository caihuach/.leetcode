/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
    const lenNeedle = needle.length;
    if (!lenNeedle) {
        return lenNeedle;
    }
    for (let i = 0; i <= haystack.length - lenNeedle; i++) {
        const char = haystack[i];
        if (
            char === needle[0] &&
            haystack.substring(i, i + lenNeedle) === needle
        ) {
            return i;
        }
    }
    return -1;
}
// @lc code=end
