/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
function singleNumber(nums: number[]): number {
    if (nums.length === 1) {
        return nums[0];
    }

    let res = 0;
    for (const num of nums) {
        res ^= num;
    }
    return res;
}

// @lc code=end
