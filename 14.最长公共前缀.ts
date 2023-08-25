/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
    // only one string || first string empty
    if (strs.length === 1 || !strs[0].length) {
        return strs[0];
    }
    // to collect prefix char
    const prefixChars = [''];
    // use first string as base
    for (let i = 0; i < strs[0].length; i += 1) {
        let char = strs[0][i];
        for (let j = 1; j < strs.length; j += 1) {
            // jth string length exceeds || different char
            if (i >= strs[j].length || strs[j][i] !== char) {
                char = '';
                break;
            }
        }
        if (!char) {
            break;
        }
        prefixChars.push(char);
    }
    return prefixChars.join('');
}
// @lc code=end
