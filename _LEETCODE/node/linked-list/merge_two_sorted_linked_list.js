/**
 * @lv 🟢
 * @link https://leetcode.com/problems/merge-two-sorted-lists/
 * @name 21. Merge Two Sorted Lists
 * @cate #node, #linked_list
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    if (!l1 && !l2) return null;
        
    const newList = new ListNode(null, null);
    let curr = newList;
    
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            curr.next = l1;
            curr = curr.next;
            l1 = l1.next;
        } else {
            curr.next = l2;
            curr = curr.next;
            l2 = l2.next;
        }
    }
    
    if (l1 !== null) curr.next = l1;
    if (l2 !== null) curr.next = l2;
    
    return newList.next;
};