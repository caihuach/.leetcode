/*
 * @lc app=leetcode.cn id=71 lang=typescript
 *
 * [71] 简化路径
 */

// @lc code=start
function simplifyPath(path: string): string {
    const arr: string[] = [];
    const entries = path.split('/');
    for (const entry of entries) {
        if (!entry) {
            continue;
        }
        switch (entry) {
            case '.':
                break;
            case '..':
                arr.pop();
                break;
            default:
                arr.push(entry);
                break;
        }
    }
    return `/${arr.join('/')}`;
}
// @lc code=end
