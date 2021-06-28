/*
 * @lc app=leetcode.cn id=567 lang=typescript
 *
 * [567] 字符串的排列
 */

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
    const window: { [c: string]: number } = {};
    const need: { [c: string]: number } = {};
    for (const c of s1) {
        window[c] = 0;
        need[c] = (need[c] || 0) + 1;
    }
    const distinctNeed = Object.keys(need).length;

    let l = -s1.length,
        r = 0;
    let valid = 0;
    while (r < s2.length) {
        // 移入
        const cIn = s2[r];
        if (cIn in need) {
            window[cIn] += 1;
            if (window[cIn] === need[cIn]) {
                valid += 1;
            }
        }
        r += 1;
        // 移出
        const cOut = s2[l];
        if (l > -1 && cOut in need) {
            if (window[cOut] === need[cOut]) {
                valid -= 1;
            }
            window[cOut] -= 1;
        }
        l += 1;
        if (valid === distinctNeed) {
            return true;
        }
    }
    return false;
}
// @lc code=end
