/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * [155] 最小栈
 */

// @lc code=start
class MinStack {
    private arr: number[] = [];
    private minArr: number[] = [Infinity];

    constructor() {}

    push(val: number): void {
        this.arr.push(val);
        this.minArr.push(Math.min(this.getMin(), val));
    }

    pop(): void {
        this.arr.pop();
        this.minArr.pop();
    }

    top(): number {
        return this.arr[this.arr.length - 1];
    }

    getMin(): number {
        return this.minArr[this.minArr.length - 1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
