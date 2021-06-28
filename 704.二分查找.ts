/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
    let l = 0,
        r = nums.length - 1;
    while (l <= r) {
        let mid = l + (((r - l) / 2) | 0);
        const midNum = nums[mid];
        if (midNum === target) {
            return mid;
        } else if (target < midNum) {
            r = mid - 1;
        } else if (midNum < target) {
            l = mid + 1;
        }
    }
    return -1;
}
// @lc code=end
