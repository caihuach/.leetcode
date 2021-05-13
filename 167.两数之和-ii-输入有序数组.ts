/*
 * @lc app=leetcode.cn id=167 lang=typescript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
    let i = 0,
        j = numbers.length - 1;

    while (i < j) {
        const sum = numbers[i] + numbers[j];
        if (sum < target) {
            i += 1;
        } else if (sum > target) {
            j -= 1;
        } else {
            return [i + 1, j + 1];
        }
    }

    return [0, 0];
}
// @lc code=end
