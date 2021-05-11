/*
 * @lc app=leetcode.cn id=118 lang=typescript
 *
 * [118] 杨辉三角
 */

// @lc code=start
function generate(numRows: number): number[][] {
    if (numRows === 1) {
        return [[1]];
    }
    const lines = generate(numRows - 1);
    const lastLine = lines[lines.length - 1];
    const thisLine = new Array(numRows).fill(1);
    for (let i = 1; i < numRows - 1; i += 1) {
        thisLine[i] = lastLine[i - 1] + lastLine[i];
    }
    lines.push(thisLine);
    return lines;
}
// @lc code=end
