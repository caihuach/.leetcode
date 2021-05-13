/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

// @lc code=start
function majorityElement(nums: number[]): number {
    const obj: { [num: number]: number } = {};
    for (const num of nums) {
        obj[num] = (obj[num] || 0) + 1;
    }
    const border = Math.floor(nums.length / 2);
    for (const key in obj) {
        if (obj[key] > border) {
            return parseInt(key);
        }
    }
    return 0;
}
// @lc code=end
