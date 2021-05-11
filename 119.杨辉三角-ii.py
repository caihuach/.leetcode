#
# @lc app=leetcode.cn id=119 lang=python3
#
# [119] 杨辉三角 II
#

# @lc code=start
from typing import List


class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        thisLine = [1]
        for i in range(1, rowIndex + 1):
            lastLine = thisLine
            thisLine = [1] * (i + 1)
            for j in range(1, i):
                thisLine[j] = lastLine[j - 1] + lastLine[j]
        return thisLine


# @lc code=end
