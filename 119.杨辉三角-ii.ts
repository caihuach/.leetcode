/*
 * @lc app=leetcode.cn id=119 lang=typescript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
    let thisLine = [1];
    for (let i = 1; i <= rowIndex; i += 1) {
        const lastLine = thisLine;
        thisLine = new Array(i + 1).fill(1);
        for (let j = 1; j < i; j += 1) {
            thisLine[j] = lastLine[j - 1] + lastLine[j];
        }
    }
    return thisLine;
}
// @lc code=end
