#
# @lc app=leetcode.cn id=28 lang=python3
#
# [28] 实现 strStr()
#

# @lc code=start
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        lenNeedle = len(needle)
        if not lenNeedle:
            return lenNeedle

        for i in range(len(haystack) - lenNeedle + 1):
            char = haystack[i]
            if char == needle[0] and haystack[i : i + lenNeedle] == needle:
                return i

        return -1


# @lc code=end
