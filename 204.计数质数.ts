/*
 * @lc app=leetcode.cn id=204 lang=typescript
 *
 * [204] 计数质数
 */

// @lc code=start
function countPrimes(n: number): number {
    if (n < 3) {
        return 0;
    }
    const isPrime: boolean[] = new Array(n).fill(true);
    const primes: number[] = [];

    for (let i = 2; i < n; i += 1) {
        if (!isPrime[i]) {
            continue;
        }
        primes.push(i);
        const right = Math.ceil(n / i);
        for (let j = i; j < right; j += 1) {
            isPrime[i * j] = false;
        }
    }
    return primes.length;
}
// @lc code=end
