/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) return head;
    
    // recursive way
    const reverseRecursion = (current, prev) => {
        const next = current.next;
        current.next = prev;
        if (!next) {
            head = current;
            return;
        };
        reverseRecursion(next, current);
    }
    // reverseRecursion(head, null);
    // return head;
    
    // iteration way
    let prev = null;
    let current = head;
    let next = null;
    
    while(current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    return prev;
};