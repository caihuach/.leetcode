#
# @lc app=leetcode.cn id=14 lang=python3
#
# [14] 最长公共前缀
#

# @lc code=start
from typing import List


class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        strsLen = len(strs)
        if strsLen == 0:
            return ""

        if strsLen == 1:
            return strs[0]

        prefix = strs.pop()

        for string in strs:
            prefix = tunePrefix(prefix, string)
            if not prefix:
                break

        return prefix


def tunePrefix(oldPrefix: str, string: str):
    newPrefix = ""
    for i in range(len(oldPrefix)):
        if i >= len(string) or oldPrefix[i] != string[i]:
            break
        newPrefix += oldPrefix[i]
    return newPrefix


# @lc code=end
