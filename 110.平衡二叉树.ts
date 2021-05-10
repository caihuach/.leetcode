/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// class TreeNode {
//     val: number;
//     left: TreeNode | null;
//     right: TreeNode | null;
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = val === undefined ? 0 : val;
//         this.left = left === undefined ? null : left;
//         this.right = right === undefined ? null : right;
//     }
// }

function isBalanced(root: TreeNode | null): boolean {
    return height(root) !== -1;
}

function height(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }
    let leftHeight = 0,
        rightHeight = 0;
    if (
        (leftHeight = height(root.left)) === -1 ||
        (rightHeight = height(root.right)) === -1 ||
        Math.abs(leftHeight - rightHeight) > 1
    ) {
        return -1;
    }
    return Math.max(leftHeight, rightHeight) + 1;
}
// @lc code=end
