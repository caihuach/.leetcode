/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 */

// @lc code=start
const dict: { [n: number]: number } = { 0: 0, 1: 1 };

function fib(n: number): number {
    if (n < 2) {
        return dict[n];
    }
    let prev = 0,
        curr = 1;
    for (let i = 2; i <= n; i += 1) {
        [curr, prev] = [prev + curr, curr];
    }

    return curr;
}

// @lc code=end
