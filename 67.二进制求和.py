#
# @lc app=leetcode.cn id=67 lang=python3
#
# [67] 二进制求和
#

# @lc code=start
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        if a == "0":
            return b
        if b == "0":
            return a

        maxLen = max(len(a), len(b))
        a = a.rjust(maxLen, "0")
        b = b.rjust(maxLen, "0")
        i = maxLen - 1
        carry = 0
        arr = [""]

        while i > -1:
            num = int(a[i]) + int(b[i]) + carry
            arr.insert(0, str(num % 2))
            carry = num // 2
            i -= 1
        if carry:
            arr.insert(0, "1")
            carry = 0
        return "".join(arr)


# @lc code=end
