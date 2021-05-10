#
# @lc app=leetcode.cn id=35 lang=python3
#
# [35] 搜索插入位置
#

# @lc code=start
from typing import List


class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        lenNums = len(nums)
        if not lenNums or nums[lenNums - 1] < target:
            return lenNums

        left = 0
        right = lenNums - 1
        while left < right:
            mid = left + (right - left) // 2
            if nums[mid] < target:
                left = mid + 1
            else:
                right = mid

        return right


# @lc code=end
