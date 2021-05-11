#
# @lc app=leetcode.cn id=118 lang=python3
#
# [118] 杨辉三角
#

# @lc code=start
from typing import List


class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        if numRows == 1:
            return [[1]]
        lines = self.generate(numRows - 1)
        lastLine = lines[numRows - 2]
        thisLine = [1] * numRows
        for i in range(1, numRows - 1):
            thisLine[i] = lastLine[i - 1] + lastLine[i]
        lines.append(thisLine)
        return lines


# @lc code=end
