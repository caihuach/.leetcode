#
# @lc app=leetcode.cn id=160 lang=python3
#
# [160] 相交链表
#

# @lc code=start
# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def getIntersectionNode(
        self, headA: ListNode, headB: ListNode
    ) -> Optional[ListNode]:
        i = headA
        j = headB
        if not i or not j:
            return None
        s = set()
        while i or j:
            if i:
                if i in s:
                    return i
                else:
                    s.add(i)
                i = i.next
            if j:
                if j in s:
                    return j
                else:
                    s.add(j)
                j = j.next
        return None


# @lc code=end
