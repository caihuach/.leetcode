#
# @lc app=leetcode.cn id=58 lang=python3
#
# [58] 最后一个单词的长度
#

# @lc code=start
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        flag = False
        length = 0
        for i in range(len(s) - 1, -1, -1):
            char = s[i]
            if char == " ":
                if flag:
                    break
            else:
                length += 1
                flag = True
        return length


# @lc code=end
