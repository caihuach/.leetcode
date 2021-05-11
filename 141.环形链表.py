#
# @lc app=leetcode.cn id=141 lang=python3
#
# [141] 环形链表
#

# @lc code=start
# Definition for singly-linked list.
from typing import Set


# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        s: Set[ListNode] = set()
        curr = head
        while curr:
            if curr in s:
                return True
            s.add(curr)
            curr = curr.next
        return False


# @lc code=end
