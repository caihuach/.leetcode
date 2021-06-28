/*
 * @lc app=leetcode.cn id=438 lang=typescript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
function findAnagrams(s: string, p: string): number[] {
    const need: { [c: string]: number } = {},
        window: { [c: string]: number } = {};
    for (const c of p) {
        need[c] = (need[c] || 0) + 1;
        window[c] = 0;
    }
    const distinctNeed = Object.keys(need).length;

    let l = -p.length,
        r = 0;
    let valid = 0;
    const res: number[] = [];
    while (r < s.length) {
        // 移入
        const cIn = s[r];
        if (cIn in need) {
            window[cIn] += 1;
            if (window[cIn] === need[cIn]) {
                valid += 1;
            }
        }
        r += 1;
        // 移出
        const cOut = s[l];
        if (l > -1 && cOut in need) {
            if (window[cOut] === need[cOut]) {
                valid -= 1;
            }
            window[cOut] -= 1;
        }
        l += 1;
        // 核对
        if (valid === distinctNeed) {
            res.push(l);
        }
    }
    return res;
}
// @lc code=end
