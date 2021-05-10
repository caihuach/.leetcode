/*
 * @lc app=leetcode.cn id=112 lang=typescript
 *
 * [112] 路径总和
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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) {
        return false;
    }
    return dfs(root, targetSum, [root.val]);
}

function dfs(root: TreeNode, targetSum: number, path: number[]): boolean {
    if (!root.left && !root.right) {
        if (sum(path) === targetSum) {
            return true;
        } else {
            return false;
        }
    }
    let leftResult = false;
    let rightResult = false;
    if (root.left) {
        leftResult = dfs(root.left, targetSum, path.concat([root.left.val]));
    }
    if (root.right) {
        rightResult = dfs(root.right, targetSum, path.concat([root.right.val]));
    }
    return leftResult || rightResult;
}

function sum(path: number[]): number {
    return path.reduce(function (previous, current) {
        return previous + current;
    }, 0);
}
// @lc code=end
