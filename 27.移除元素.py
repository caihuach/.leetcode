#
# @lc app=leetcode.cn id=27 lang=python3
#
# [27] 移除元素
#

# @lc code=start
from typing import List


class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        lenNums = len(nums)
        if not lenNums or val > 50:
            return lenNums

        left = 0
        for num in nums:
            if num != val:
                nums[left] = num
                left += 1

        return left


# @lc code=end
