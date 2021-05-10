#
# @lc app=leetcode.cn id=38 lang=python3
#
# [38] 外观数列
#

# @lc code=start
class Solution:
    def countAndSay(self, n: int) -> str:
        if n > 1:
            previous = self.countAndSay(n - 1)
            currentChar = previous[0]
            currentCount = 1
            result = ""
            for i in range(1, len(previous)):
                char = previous[i]
                if char != currentChar:
                    result += f"{currentCount}{currentChar}"
                    currentChar = char
                    currentCount = 1
                else:
                    currentCount += 1
            result += f"{currentCount}{currentChar}"
            return result
        else:
            return "1"


# @lc code=end
