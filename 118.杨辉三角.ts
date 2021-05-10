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
    const virtualLine = [0, ...lastLine, 0];
    const thisLine: number[] = [];
    for (let i = 0; i < numRows; i += 1) {
        thisLine.push(virtualLine[i] + virtualLine[i + 1]);
    }
    lines.push(thisLine);
    return lines;
}
// @lc code=end
