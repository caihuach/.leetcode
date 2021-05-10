/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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

function mergeTwoLists(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    const dummy = new ListNode();
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }
    let p1 = l1,
        p2 = l2,
        p3: ListNode | null = dummy;
    while (p1 && p2) {
        if (p1.val > p2.val) {
            p3.next = p2;
            p2 = p2.next;
        } else {
            p3.next = p1;
            p1 = p1.next;
        }
        p3 = p3.next;
    }
    if (p1) {
        p3.next = p1;
    } else {
        p3.next = p2;
    }
    return dummy.next;
}
// @lc code=end
