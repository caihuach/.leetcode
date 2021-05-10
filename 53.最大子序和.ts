/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子序和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
    let sum = 0;
    let maxSum = nums[0];
    for (const num of nums) {
        sum += num;
        maxSum = Math.max(maxSum, sum);
        if (sum < 0) {
            sum = 0;
        }
    }
    return maxSum;
}
// @lc code=end
