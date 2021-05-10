/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
    const sLen = s.length;
    if (sLen === 0) {
        return true;
    }
    if (sLen % 2 === 1) {
        return false;
    }

    const pairs: { [left: string]: string } = {
        ')': '(',
        '}': '{',
        ']': '[',
    };
    const lefts = Object.values(pairs);

    const stack: string[] = [];

    for (const c of s) {
        if (lefts.includes(c)) {
            stack.push(c);
        } else {
            if ((stack.pop() || '') !== pairs[c]) {
                return false;
            }
        }
    }
    if (stack.length > 0) {
        return false;
    }
    return true;
}
// @lc code=end
