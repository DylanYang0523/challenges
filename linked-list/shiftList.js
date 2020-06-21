/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * https://leetcode.com/problems/rotate-list/
 * 61. Rotate List
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    const solutionA = () => {
        if (!head) return null;
        if (k === 0) return head;

        let pointerA = head;
        for (let i = 0; i < k; i++) {
            pointerA = pointerA.next;
            if (!pointerA) pointerA = head;
        }

        if (pointerA === head) return head;

        let pointerB = head;
        while (pointerA.next !== null) {
            pointerA = pointerA.next;
            pointerB = pointerB.next;
        }

        const newHead = pointerB.next;
        pointerB.next = null;
        pointerA.next = head;

        return newHead;   
    }
    
    const solutionB = () => {
        if (!head) return null;
        if (k === 0) return head;
        
        let long = 1;
        let pointer = head;
        while (pointer.next !== null) {
            long += 1;
            pointer = pointer.next;
        }
        
        if (long === 1) return head;
        
        const steps = long - (k % long) - 1;
        if (steps === long - 1) return head;
        
        pointer = head;
        for (let i = 0; i < steps; i++) {
            pointer = pointer.next;
        }
        
        const newHead = pointer.next;
        pointer.next = null;
        pointer = newHead;
        while (pointer.next !== null) {
            pointer = pointer.next;
        }
        pointer.next = head;
        
        return newHead;
    }
    
    const solutionC = () => {
        if (!head) return null;
        if (k === 0) return head;
        
        let long = 0;
        let pointer = head;
        while (pointer !== null) {
            long += 1;
            pointer = pointer.next;
        }
        
        k %= long;

        let pointerA = head;
        for (let i = 0; i < k; i++) {
            pointerA = pointerA.next;
            if (!pointerA) pointerA = head;
        }

        if (pointerA === head) return head;

        let pointerB = head;
        while (pointerA.next !== null) {
            pointerA = pointerA.next;
            pointerB = pointerB.next;
        }

        const newHead = pointerB.next;
        pointerB.next = null;
        pointerA.next = head;

        return newHead;   
    }
    
    return solutionC();
};