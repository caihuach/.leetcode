#
# @lc app=leetcode.cn id=112 lang=python3
#
# [112] 路径总和
#

# @lc code=start
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val: int = val
        self.left: TreeNode = left
        self.right: TreeNode = right


from typing import List


class Solution:
    def hasPathSum(self, root: TreeNode, targetSum: int) -> bool:
        if not root:
            return False
        return dfs(root, targetSum, [root.val])


def dfs(root: TreeNode, targetSum: int, path: List[int]):
    if not root.left and not root.right:
        return sum(path) == targetSum
    leftRes = False
    rightRes = False
    if root.left:
        leftRes = dfs(root.left, targetSum, path + [root.left.val])
    if root.right:
        rightRes = dfs(root.right, targetSum, path + [root.right.val])
    return leftRes or rightRes


# @lc code=end
