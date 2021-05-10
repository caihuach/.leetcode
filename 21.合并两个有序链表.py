#
# @lc app=leetcode.cn id=21 lang=python3
#
# [21] 合并两个有序链表
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        if not l1:
            return l2
        if not l2:
            return l1
        p1 = l1
        p2 = l2
        dummy = ListNode()
        p3 = dummy

        while p1 and p2:
            if p1.val > p2.val:
                p3.next = p2
                p2 = p2.next
            else:
                p3.next = p1
                p1 = p1.next
            p3 = p3.next

        if p1:
            p3.next = p1
        elif p2:
            p3.next = p2

        return dummy.next


# @lc code=end
