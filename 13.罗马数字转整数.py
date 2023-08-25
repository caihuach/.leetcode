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
        sum = 0
        i = 0
        while i < len(s):
            two = s[i : i + 2]
            if two in numMap:
                sum += numMap[two]
                i += 2
            else:
                sum += numMap[s[i]]
                i += 1
        return sum


# @lc code=end
