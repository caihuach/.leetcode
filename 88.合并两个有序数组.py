#
# @lc app=leetcode.cn id=88 lang=python3
#
# [88] 合并两个有序数组
#

# @lc code=start
from typing import List


class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        if n == 0:
            return
        if m == 0:
            for i in range(n - 1, -1, -1):
                nums1[i] = nums2[i]
            return
        # 除了下面两个指针，还有一个隐藏指针m+n-1
        n1 = nums1[m - 1]
        n2 = nums2[n - 1]
        # 每次把最大数放到nums1的m+n-1，其余数字都放到merge()里面递归
        if n1 < n2:
            nums1[m + n - 1] = n2
            return self.merge(nums1, m, nums2, n - 1)
        else:
            nums1[m + n - 1] = n1
            return self.merge(nums1, m - 1, nums2, n)


# @lc code=end
