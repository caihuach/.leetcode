#
# @lc app=leetcode.cn id=66 lang=python3
#
# [66] 加一
#

# @lc code=start
from typing import List


class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        flag = 1
        for i in range(len(digits) - 1, -1, -1):
            if not flag:
                return digits
            digit = digits[i] + flag
            if digit != 10:
                digits[i] = digit
                flag = 0
            else:
                digits[i] = 0
                flag = 1
        if flag:
            digits.insert(0, 1)
            flag = 0
        return digits


# @lc code=end
