#
# @lc app=leetcode.cn id=168 lang=python3
#
# [168] Excel表列名称
#

# @lc code=start
class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        res = ""
        while columnNumber:
            diff = (columnNumber - 1) % 26
            res = getChar(diff) + res
            columnNumber = (columnNumber - diff - 1) // 26

        return res


code = ord("A")


def getChar(diff: int):
    return chr(code + diff)


# @lc code=end
