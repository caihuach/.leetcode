/*
 * @lc app=leetcode.cn id=205 lang=typescript
 *
 * [205] 同构字符串
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
    const S = { [s[0]]: t[0] },
        T = { [t[0]]: s[0] };
    for (let i = 1; i < s.length; i += 1) {
        const a = s[i],
            b = t[i];
        if ((S[a] && S[a] !== b) || (T[b] && T[b] !== a)) {
            return false;
        }
        S[a] = b;
        T[b] = a;
    }
    return true;
}

// @lc code=end
