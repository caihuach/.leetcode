/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
class LRUCache {
    keys: number[];
    map: { [key: number]: number };
    capacity: number;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.keys = new Array(capacity);
        this.map = {};
    }

    get(key: number): number {
        if (key in this.map) {
            this.moveToFirst(key);
            return this.map[key];
        } else {
            return -1;
        }
    }

    put(key: number, value: number): void {
        if (key in this.map) {
            this.map[key] = value;
            this.moveToFirst(key);
            return;
        }
        if (this.keys.length === this.capacity) {
            const k = this.keys.pop();
            delete this.map[k!];
        }
        this.keys.unshift(key);
        this.map[key] = value;
    }

    private moveToFirst(key: number): void {
        const index = this.keys.indexOf(key);
        if (index > 0) {
            const temp = this.keys[index];
            for (let i = index; i > 0; i -= 1) {
                this.keys[i] = this.keys[i - 1];
            }
            this.keys[0] = temp;
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
