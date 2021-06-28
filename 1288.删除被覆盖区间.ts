/*
 * @lc app=leetcode.cn id=1288 lang=typescript
 *
 * [1288] 删除被覆盖区间
 */

// @lc code=start
function removeCoveredIntervals(intervals: number[][]): number {
    // sort left point
    intervals.sort(function (a, b) {
        if (a[0] === b[0]) {
            return b[1] - a[1];
        }
        return a[0] - b[0];
    });
    let left = intervals[0][0];
    let right = intervals[0][1];
    let count = 0;

    for (const interval of intervals.slice(1)) {
        if (interval[0] <= right) {
            if (interval[1] <= right) {
                count += 1;
            } else {
                right = interval[1];
            }
        } else {
            left = interval[0];
            right = interval[1];
        }
    }

    return intervals.length - count;
}
// @lc code=end
