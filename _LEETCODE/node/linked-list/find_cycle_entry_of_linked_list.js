/**
 * @lv 🟡
 * @link https://leetcode.com/problems/linked-list-cycle-ii/
 * @name 142. Linked List Cycle II
 * @cate #editor_pick, #linked_list, #node
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head) return null;
    
    // 1. find the meeting point
    // 2. move one pointer back to head
    
    let pointerA = head;
    let pointerB = head;
    let isValid = false;
    
    while (pointerA && pointerA.next && pointerB) {
        pointerA = pointerA.next.next;
        pointerB = pointerB.next;
        if (pointerA === pointerB) {
            isValid = true;
            break;
        }
    }
    
    if (isValid) {
        pointerA = head;
        while (pointerA !== pointerB) {
            pointerA = pointerA.next;
            pointerB = pointerB.next;
        }
        return pointerA;
    } else {
        return null;
    }
};