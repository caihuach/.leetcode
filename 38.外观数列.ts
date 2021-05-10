/*
 * @lc app=leetcode.cn id=38 lang=typescript
 *
 * [38] 外观数列
 */

// @lc code=start
function countAndSay(n: number): string {
    if (n > 1) {
        const previousString = countAndSay(n - 1);
        let currentChar = previousString[0],
            currentCount = 1,
            result = '';
        for (let i = 1; i < previousString.length; i += 1) {
            const char = previousString[i];
            if (char !== currentChar) {
                result += `${currentCount}${currentChar}`;
                currentChar = char;
                currentCount = 1;
            } else {
                currentCount += 1;
            }
        }
        result += `${currentCount}${currentChar}`;
        return result;
    } else {
        return '1';
    }
}
// @lc code=end
