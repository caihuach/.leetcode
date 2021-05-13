#
# @lc app=leetcode.cn id=167 lang=python3
#
# [167] 两数之和 II - 输入有序数组
#

# @lc code=start
from typing import Dict, List


class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        obj: Dict[int, int] = {}
        for i, num in enumerate(numbers):
            diff = target - num
            if diff in obj:
                return [obj[diff], i + 1]
            obj[num] = i + 1
        return [0, 0]


# @lc code=end
