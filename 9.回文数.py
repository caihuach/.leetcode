#
# @lc app=leetcode.cn id=9 lang=python3
#
# [9] 回文数
#


# @lc code=start
class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        x, remainder = divmod(x, 10)
        if remainder == 0 and x > 0:
            return False
        reversal = remainder
        while x > reversal:
            x, remainder = divmod(x, 10)
            reversal = reversal * 10 + remainder

        return x == reversal or x == reversal // 10


# @lc code=end
