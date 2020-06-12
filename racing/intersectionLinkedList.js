/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * https://leetcode.com/problems/intersection-of-two-linked-lists/
 * 160. Intersection of Two Linked Lists
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // T = O(n); S = O(headA);
    const solutionA = () => {
        if (!headA || !headB) return null;
        
        const map = new Map();
        let pointerA = headA;
        while (pointerA) {
            map.set(pointerA, true);
            pointerA = pointerA.next;
        }
        
        let pointerB = headB;
        while (pointerB && !map.get(pointerB)) {
            pointerB = pointerB.next;
        }
        
        return pointerB;
    }
    
    const solutionB = () => {
        if (!headA || !headB) return null;
        
        let pointerA = headA;
        let pointerB = headB;
        
        while (pointerA !== pointerB) {
            if (pointerA.next) {
                pointerA = pointerA.next;
            } else {
                if (pointerB.next) {
                    pointerA = headB;
                } else {
                    pointerA = pointerA.next;
                    pointerA = pointerB.next;
                    break;
                }
            }
            
            if (pointerB.next) {
                pointerB = pointerB.next;
            } else {
                if (pointerA.next) {
                    pointerB = headA;
                } else {
                    pointerA = pointerA.next;
                    pointerA = pointerB.next;
                    break;
                }
            }
        }
        
        return pointerA;
    }
    
    return solutionA();
};