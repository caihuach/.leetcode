/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
    const lenNums = nums.length;
    if (!lenNums || nums[lenNums - 1] < target) {
        return lenNums;
    }

    let left = 0,
        right = lenNums - 1;

    while (left < right) {
        let mid = left + (((right - left) / 2) | 0);
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return right;
}
// @lc code=end
