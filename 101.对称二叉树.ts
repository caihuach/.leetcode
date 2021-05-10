/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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

function isSymmetric(root: TreeNode | null): boolean {
    let trees = [root, root];
    while (trees.length) {
        const left = trees.shift();
        const right = trees.shift();
        if (!left && !right) {
            continue;
        }
        if (!left || !right || left.val !== right.val) {
            return false;
        }
        trees = trees.concat([left.left, right.right, left.right, right.left]);
    }
    return true;
}

// @lc code=end
