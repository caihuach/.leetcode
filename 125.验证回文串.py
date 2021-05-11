#
# @lc app=leetcode.cn id=125 lang=python3
#
# [125] 验证回文串
#

# @lc code=start
import re, math


class Solution:
    def isPalindrome(self, s: str) -> bool:
        refined = re.sub(r"\W+|\_+", "", s).lower()
        if not refined:
            return True
        return isSymmetric(refined)


def isSymmetric(s: str) -> bool:
    n = len(s)
    i = math.floor((n - 1) / 2)
    j = math.ceil((n - 1) / 2)

    while i > -1:
        if s[i] != s[j]:
            return False
        i -= 1
        j += 1
    return True


# @lc code=end
