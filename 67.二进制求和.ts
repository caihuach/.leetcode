/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 */

// @lc code=start
function addBinary(a: string, b: string): string {
    if (a === '0') {
        return b;
    }
    if (b === '0') {
        return a;
    }
    const maxLen = Math.max(a.length, b.length);
    a = a.padStart(maxLen, '0');
    b = b.padStart(maxLen, '0');
    const arr = [''];
    let i = maxLen - 1;
    let carry = 0;
    while (i > -1) {
        const num = parseInt(a[i]) + parseInt(b[i]) + carry;
        arr.unshift((num % 2).toString());
        carry = (num / 2) | 0;
        i -= 1;
    }
    if (carry) {
        arr.unshift('1');
        carry = 0;
    }
    return arr.join('');
}

// @lc code=end
