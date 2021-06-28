/*
 * @lc app=leetcode.cn id=752 lang=typescript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
function addOne(s: string, i: number): string {
    const sArr = s.split('');
    sArr[i] = ((parseInt(sArr[i]) + 1) % 10).toString();
    return sArr.join('');
}

function subOne(s: string, i: number): string {
    const sArr = s.split('');
    // num-1+10防止负数
    sArr[i] = ((parseInt(sArr[i]) + 9) % 10).toString();
    return sArr.join('');
}

function openLock(deadends: string[], target: string): number {
    // 方便搜索
    const visited = new Set(deadends);
    const root = '0000';
    if (visited.has(root)) {
        return -1;
    }
    let q1 = new Set([root]);
    let q2 = new Set([target]);

    // root不算
    let step = 0;

    while (q1.size) {
        const temp: Set<string> = new Set();
        for (const curr of q1) {
            if (visited.has(curr)) {
                continue;
            }
            // 相遇成功
            if (q2.has(curr)) {
                return step;
            }
            visited.add(curr);
            // 判断
            for (let j = 0; j < 4; j += 1) {
                const up = addOne(curr!, j);
                if (!visited.has(up)) {
                    temp.add(up);
                }

                const down = subOne(curr!, j);
                if (!visited.has(down)) {
                    temp.add(down);
                }
            }
        }
        step += 1;
        // 轮流扩散
        q1 = q2;
        q2 = temp;
    }

    return -1;
}
// @lc code=end
