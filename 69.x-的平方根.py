#
# @lc app=leetcode.cn id=69 lang=python3
#
# [69] x 的平方根
#

# @lc code=start
class Solution:
    def mySqrt(self, x: int) -> int:
        if x < 2:
            return x
        if x < 4:
            return 1

        left = 1
        right = x - 1
        while left < right:
            mid = (left + right) // 2
            if mid > x / mid:
                right = mid
            else:
                left = mid + 1
        return left - 1


# @lc code=end
