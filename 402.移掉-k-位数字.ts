/*
 * @lc app=leetcode.cn id=402 lang=typescript
 *
 * [402] 移掉 K 位数字
 */

// @lc code=start
function removeKdigits(num: string, k: number): string {
    const stack: string[] = [];

    for (const digit of num) {
        while (
            k &&
            stack.length &&
            parseInt(stack[stack.length - 1]) > parseInt(digit)
        ) {
            stack.pop();
            k -= 1;
        }
        if (digit !== '0') {
            stack.push(digit);
        } else {
            stack[stack.length - 1] += digit;
        }
    }

    for (let i = 0; i < k; i++) {
        stack.pop();
    }

    return stack.length ? stack.join('') : '0';
}
// @lc code=end
