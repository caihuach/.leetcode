/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    nums.sort(function (a, b) {
        return a - b;
    });
    let i = 0,j = nums.length-1;
    
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
