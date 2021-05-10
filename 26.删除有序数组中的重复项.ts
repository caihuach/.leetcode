/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    if (!nums.length) {
        return 0;
    }
    let position = 1;
    let currentNum = nums[0];
    for (const num of nums) {
        if (num !== currentNum) {
            nums[position] = num;
            currentNum = num;
            position += 1;
        }
    }
    return position;
}
// @lc code=end
