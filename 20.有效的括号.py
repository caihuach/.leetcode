#
# @lc app=leetcode.cn id=20 lang=python3
#
# [20] 有效的括号
#

# @lc code=start
class Solution:
    def isValid(self, s: str) -> bool:
        sLen = len(s)
        if sLen == 0:
            return True
        if sLen % 2 == 1:
            return False

        pairs = {")": "(", "}": "{", "]": "["}
        lefts = pairs.values()

        stack = []

        for c in s:
            if c in lefts:
                stack.append(c)
            else:
                if len(stack) == 0 or stack.pop() != pairs[c]:
                    return False

        if len(stack) > 0:
            return False
        return True


# @lc code=end
