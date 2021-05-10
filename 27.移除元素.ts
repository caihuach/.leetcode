/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
    const lenNums = nums.length;
    if (!lenNums || val > 50) {
        return lenNums;
    }

    let left = 0;
    for (const num of nums) {
        if (num !== val) {
            nums[left] = num;
            left += 1;
        }
    }
    return left;
}

// @lc code=end
