#
# @lc app=leetcode.cn id=1 lang=python3
#
# [1] 两数之和
#


# @lc code=start
class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        pair: list[int] = []
        diff: dict[int, int] = {}
        for i, num in enumerate(nums):
            if target - num in diff:
                pair = [diff[target - num], i]
                break
            else:
                diff[num] = i
        return pair


# @lc code=end
