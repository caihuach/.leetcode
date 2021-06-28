/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
    const res: number[][] = [];
    function dfs(path: Set<number>): void {
        if (path.size === nums.length) {
            // 长度满足
            res.push(Array.from(path));
            return;
        }
        for (const num of nums) {
            if (path.has(num)) {
                continue;
            }
            // 选择
            path.add(num);
            // 回溯
            dfs(path);
            // 撤销
            path.delete(num);
        }
    }
    dfs(new Set());
    return res;
}
// @lc code=end
