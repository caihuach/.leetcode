/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
    if (!nums.length) {
        return [-1, -1];
    }
    const lower = searchLeft(nums, target);
    if (lower === -1) {
        return [-1, -1];
    }
    return [lower, searchRight(nums, target)];
}

function searchLeft(nums: number[], target: number): number {
    let l = 0,
        r = nums.length - 1;
    while (l <= r) {
        const mid = ((l + r) / 2) | 0;
        const midNum = nums[mid];
        if (target <= midNum) {
            // r是左边界-1
            r = mid - 1;
        } else if (midNum < target) {
            l = mid + 1;
        }
    }
    return l < nums.length && nums[l] === target ? l : -1;
}

function searchRight(nums: number[], target: number): number {
    let l = 0,
        r = nums.length - 1;
    while (l <= r) {
        const mid = ((l + r) / 2) | 0;
        const midNum = nums[mid];
        if (target < midNum) {
            r = mid - 1;
        } else if (midNum <= target) {
            // l是右边界+1
            l = mid + 1;
        }
    }
    return r > -1 && nums[r] === target ? r : -1;
}
// @lc code=end
