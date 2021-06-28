/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

// @lc code=start
function rob(nums: number[]): number {
    const { max } = Math;
    const n = nums.length;
    // 两个不存在的房间
    let dp_i_2 = 0;
    let dp_i_1 = 0;
    for (let i = n - 1; i > -1; i -= 1) {
        // 偷or不偷
        // 交换
        [dp_i_1, dp_i_2] = [max(nums[i] + dp_i_2, dp_i_1), dp_i_1];
    }
    return dp_i_1;
}
// @lc code=end
