/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
function minWindow(s: string, t: string): string {
    const need: { [c: string]: number } = {};
    const window: { [c: string]: number } = {};
    for (const c of t) {
        // 处理复数个char
        need[c] = (need[c] || 0) + 1;
        window[c] = 0;
    }
    const distinctNeedLen = Object.keys(need).length;

    let l = 0,
        r = 0;
    // 使用越界长度
    let start = 0,
        len = s.length + 1;
    let valid = 0;
    while (r < s.length) {
        // 准备移入
        const c = s[r];
        r += 1;
        if (c in need) {
            // 先加
            window[c] += 1;
            if (window[c] === need[c]) {
                // 临界值
                valid += 1;
            }
        }

        while (valid === distinctNeedLen) {
            // 更新答案
            if (r - l < len) {
                start = l;
                len = r - l;
            }
            // 准备移出
            const d = s[l];
            l += 1;
            if (d in need) {
                if (window[d] === need[d]) {
                    // 临界值
                    valid -= 1;
                }
                // 后减
                window[d] -= 1;
            }
        }
    }
    return len === s.length + 1 ? '' : s.substring(start, start + len);
}
// @lc code=end
