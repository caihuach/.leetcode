#
# @lc app=leetcode.cn id=13 lang=python3
#
# [13] 罗马数字转整数
#

# @lc code=start
class Solution:
    def romanToInt(self, s: str) -> int:
        numMap = {
            "CM": 900,
            "CD": 400,
            "XC": 90,
            "XL": 40,
            "IX": 9,
            "IV": 4,
            "M": 1000,
            "D": 500,
            "C": 100,
            "L": 50,
            "X": 10,
            "V": 5,
            "I": 1,
        }
        result = 0
        copy = s
        for sym in numMap:
            while sym in copy:
                result += numMap[sym]
                copy = copy.replace(sym, "", 1)

        return result
# @lc code=end
