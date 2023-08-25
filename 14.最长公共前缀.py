#
# @lc app=leetcode.cn id=14 lang=python3
#
# [14] 最长公共前缀
#


# @lc code=start
class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        # only one string or first string empty
        if len(strs) == 1 or len(strs[0]) == 0:
            return strs[0]
        prefixChars = [""]
        # first string as base
        firstStr = strs[0]
        for i in range(len(firstStr)):
            char = firstStr[i]
            for j in range(1, len(strs)):
                # jth string length exceeds or char not equal
                if i >= len(strs[j]) or strs[j][i] != char:
                    char = ""
                    break
            if char == "":
                break
            prefixChars.append(char)
        return "".join(prefixChars)


# @lc code=end
