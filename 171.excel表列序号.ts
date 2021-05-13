/*
 * @lc app=leetcode.cn id=171 lang=typescript
 *
 * [171] Excel表列序号
 */

// @lc code=start
function titleToNumber(columnTitle: string): number {
    const zeroCode = 'A'.charCodeAt(0);
    let res = 0;
    let pow = 0;
    for (let i = columnTitle.length - 1; i > -1; i -= 1) {
        const code = columnTitle[i].charCodeAt(0);
        res += (code - zeroCode + 1) * 26 ** pow;
        pow += 1;
    }
    return res;
}
// @lc code=end
