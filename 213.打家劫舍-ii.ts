/*
 * @lc app=leetcode.cn id=213 lang=typescript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
function rob(nums: number[]): number {
    const n = nums.length;
    if (n < 2) {
        return nums[0] || 0;
    }
    return Math.max(helper(nums, 1, n - 1), helper(nums, 0, n - 2));
}

function helper(nums: number[], start: number, end: number): number {
    const n = nums.length;
    let dp_i_2 = 0;
    let dp_i_1 = 0;

    for (let i = end; i >= start; i -= 1) {
        [dp_i_1, dp_i_2] = [Math.max(dp_i_1, nums[i] + dp_i_2), dp_i_1];
    }

    return dp_i_1;
}

// @lc code=end
