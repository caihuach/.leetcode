/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// class ListNode {
//     val: number;
//     next: ListNode | null;
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = val === undefined ? 0 : val;
//         this.next = next === undefined ? null : next;
//     }
// }

function removeElements(head: ListNode | null, val: number): ListNode | null {
    // 结束
    if (!head) {
        return head;
    }
    // 抛弃当前节点
    if (head.val === val) {
        return removeElements(head.next, val);
    }

    head.next = removeElements(head.next, val);
    return head;
}
// @lc code=end
