#
# @lc app=leetcode.cn id=70 lang=python3
#
# [70] 爬楼梯
#

# @lc code=start
from typing import Dict


class Solution:
    def climbStairs(self, n: int) -> int:
        if n < 3:
            return n

        a = 1
        b = 2
        for i in range(3, n + 1):
            a, b = b, a + b
        return b


# @lc code=end
