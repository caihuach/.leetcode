/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    let pair: number[] = [];
    const diff: { [n: number]: number } = {}
    for (let i = 0; i < nums.length; i += 1) {
        if (target - nums[i] in diff) {
            pair = [diff[target - nums[i]], i];
            break;
        } else {
            diff[nums[i]] = i;
        }
    }
    return pair;
};
// @lc code=end

