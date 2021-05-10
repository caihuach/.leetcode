#
# @lc app=leetcode.cn id=7 lang=python3
#
# [7] 整数反转
#

# @lc code=start
class Solution:
    def reverse(self, x: int) -> int:

        if -10 < x < 10:
            return x

        maxStr = str(2 ** 31 - 1)
        minStr = str(-(2 ** 31))
        absX = abs(x)
        sign = x / absX
        revAbsStr = str(absX)[::-1]

        if sign == -1:
            revStr = f"-{revAbsStr}"
            if ifExceed(revStr, minStr):
                return 0
            return int(revStr)
        else:
            revStr = revAbsStr
            if ifExceed(revStr, maxStr):
                return 0
            return int(revStr)


def ifExceed(revStr: str, str32: str) -> bool:
    revLen = len(revStr)
    len32 = len(str32)
    if revLen == len32 and revStr > str32:
        return True
    if revLen > len32:
        return True
    return False


# @lc code=end
