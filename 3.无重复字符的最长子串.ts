/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    const window: { [c: string]: number } = {};
    let l = 0,
        r = 0;
    let maxLen = 0;

    while (r < s.length) {
        const cIn = s[r];
        r += 1;
        window[cIn] = (window[cIn] || 0) + 1;
        while (window[cIn] > 1) {
            // 某个char重复
            const cOut = s[l];
            window[cOut] -= 1;
            l += 1;
        }

        maxLen = Math.max(maxLen, r - l);
    }

    return maxLen;
}
// @lc code=end
