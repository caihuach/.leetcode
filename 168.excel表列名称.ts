/*
 * @lc app=leetcode.cn id=168 lang=typescript
 *
 * [168] Excel表列名称
 */

// @lc code=start
function convertToTitle(columnNumber: number): string {
    let res = '';
    while (columnNumber) {
        const diff = (columnNumber - 1) % 26;
        res = getChar(diff) + res;
        columnNumber = (columnNumber - diff - 1) / 26;
    }
    return res;
}

const code = 'A'.charCodeAt(0);

function getChar(diff: number): string {
    return String.fromCharCode(code + diff);
}
// @lc code=end
