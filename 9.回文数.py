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
        if x < 10:
            return True
        if x % 10 == 0:
            return False

        y = x
        revY = 0

        while y > revY:
            revY = revY * 10 + y % 10
            y = y // 10

        return y == revY or y == revY // 10


# @lc code=end
