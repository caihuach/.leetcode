/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
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

function reverseList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }
    let prev = null;
    let curr: ListNode | null = head;
    while (curr) {
        const temp: ListNode | null = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
}

// @lc code=end
