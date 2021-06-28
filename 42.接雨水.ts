/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
function trap(height: number[]): number {
    const stack = new Stack();
    let res = 0;

    for (let i = height.length - 1; i >= 0; i -= 1) {
        // 栈顶小于当前
        while (stack.length && height[i] > height[stack.last()]) {
            const j = stack.pop();
            if (stack.length) {
                // min diff * width
                res +=
                    (Math.min(height[i], height[stack.last()]) - height[j!]) *
                    (stack.last() - i - 1);
            }
        }

        stack.push(i);
    }

    return res;
}

class Stack extends Array<number> {
    // 估计用不到-1
    last() {
        return this[this.length - 1] || -1;
    }
}
// @lc code=end
