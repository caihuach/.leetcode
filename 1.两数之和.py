#
# @lc app=leetcode.cn id=1 lang=python3
#
# [1] 两数之和
#
from typing import List, Dict

# @lc code=start
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        obj: Dict[str, int] = {}
        for i, num in enumerate(nums):
            remain = target - num
            if remain in obj:
                return [obj[remain], i]
            obj[num] = i
        return [-1, -1]


# @lc code=end
