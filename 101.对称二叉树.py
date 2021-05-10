#
# @lc app=leetcode.cn id=101 lang=python3
#
# [101] 对称二叉树
#

# @lc code=start
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        trees = [root, root]
        while len(trees):
            left = trees.pop(0)
            right = trees.pop(0)
            if not left and not right:
                continue
            if (not left or not right) or left.val != right.val:
                return False
            trees.extend([left.left, right.right, left.right, right.left])
        return True


# @lc code=end
