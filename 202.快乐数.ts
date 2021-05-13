/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
function isHappy(n: number): boolean {
    let slow = n;
    let fast = getNext(n);

    while (fast !== 1 && fast !== slow) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }
    return fast === 1;
}

function getNext(n: number): number {
    return n
        .toString()
        .split('')
        .reduce(function (previous, current) {
            return previous + parseInt(current) ** 2;
        }, 0);
}
// @lc code=end
