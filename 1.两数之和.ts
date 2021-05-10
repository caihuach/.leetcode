/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const dict = {};
    for (let [i, num] of nums.entries()) {
        const remain = target - num;
        if (remain in dict) {
            return [dict[remain], i];
        }
        dict[num] = i;
    }
    return [-1, -1];
}
// @lc code=end
