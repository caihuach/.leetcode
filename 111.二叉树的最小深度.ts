/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
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

function minDepth(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }
    let minHeight = 1;
    let arr = [root];
    while (arr.length) {
        const tempArr: TreeNode[] = [];
        while (arr.length) {
            const node = arr.pop();
            if (!node?.left && !node?.right) {
                return minHeight;
            }
            if (node.left) {
                tempArr.push(node.left);
            }
            if (node.right) {
                tempArr.push(node.right);
            }
        }
        arr = tempArr;
        minHeight += 1;
    }
    return minHeight;
}
// @lc code=end
