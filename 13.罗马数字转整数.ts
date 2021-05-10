/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {
    const numMap: { [key: string]: number } = {
        CM: 900,
        CD: 400,
        XC: 90,
        XL: 40,
        IX: 9,
        IV: 4,
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1,
    };
    let result = 0;
    let copy = s;
    for (const sym in numMap) {
        while (copy.includes(sym)) {
            result += numMap[sym];
            copy = copy.replace(sym, '');
        }
    }

    return result;
}
// @lc code=end
