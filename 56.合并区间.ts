/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
    intervals.sort(function (a, b) {
        if (a[0] === b[0]) {
            return b[1] - a[1];
        }
        return a[0] - b[0];
    });
    let left = intervals[0][0];
    let right = intervals[0][1];
    const res: [number, number][] = [];

    for (const interval of intervals.slice(1)) {
        if (interval[0] <= right) {
            if (right < interval[1]) {
                right = interval[1];
            }
        } else {
            res.push([left, right]);
            left = interval[0];
            right = interval[1];
        }
    }
    res.push([left, right]);

    return res;
}
// @lc code=end
