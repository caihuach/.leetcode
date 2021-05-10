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
        virtualLine = [0] + lastLine + [0]
        thisLine: List[int] = []
        for i in range(numRows):
            thisLine.append(virtualLine[i] + virtualLine[i + 1])
        lines.append(thisLine)
        return lines


# @lc code=end
