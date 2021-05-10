/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
function reverse(x: number): number {
    if (x === 0) {
        return x;
    }
    const minStr = (-(2 ** 31)).toString();
    const maxStr = (2 ** 31 - 1).toString();

    const sign = Math.sign(x);
    // 正数的字符串
    const absStr = Math.abs(x).toString();
    const revAbsStr = absStr.split('').reverse().join('');
    if (sign === -1) {
        const revStr = '-' + revAbsStr;
        if (ifExceed(revStr, minStr)) {
            return 0;
        }
        return parseInt(revStr);
    } else {
        const revStr = revAbsStr;
        if (ifExceed(revStr, maxStr)) {
            return 0;
        }
        return parseInt(revStr);
    }
}

function ifExceed(revStr: string, str32: string) {
    const revLen = revStr.length;
    const len32 = str32.length;
    if (revLen === len32 && revStr > str32) {
        return true;
    }
    if (revLen > len32) {
        return true;
    }
    return false;
}
// @lc code=end
