/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) {
        return '';
    }
    if (strs.length === 1) {
        return strs[0];
    }
    // 随便拿最后一个元素
    let prefix = strs.pop() || '';

    for (const str of strs) {
        prefix = getPrefix(prefix, str);
        if (!prefix) {
            break;
        }
    }

    return prefix;
}

function getPrefix(prefix: string, str: string): string {
    let newPrefix = '';
    for (let i = 0; i < prefix.length; i++) {
        if (prefix[i] !== str[i]) {
            break;
        }
        newPrefix += prefix[i];
    }
    return newPrefix;
}
// @lc code=end
