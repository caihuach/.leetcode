#
# @lc app=leetcode.cn id=111 lang=python3
#
# [111] 二叉树的最小深度
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def minDepth(self, root: TreeNode) -> int:
        if not root:
            return 0

        minH = 1
        arr = [root]
        while len(arr):
            temp = []
            while len(arr):
                node = arr.pop()
                if not node.left and not node.right:
                    return minH
                if node.left:
                    temp.append(node.left)
                if node.right:
                    temp.append(node.right)
            arr = temp
            minH += 1

        return minH


# @lc code=end
