#
# @lc app=leetcode.cn id=26 lang=python3
#
# [26] 删除有序数组中的重复项
#

# @lc code=start
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if not len(nums):
            return 0

        position = 1
        currentNum = nums[0]
        for num in nums:
            if num != currentNum:
                nums[position] = num
                currentNum = num
                position += 1

        return position


# @lc code=end
