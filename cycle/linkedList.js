/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * https://leetcode.com/problems/linked-list-cycle/
 * 141. Linked List Cycle
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const solutionA = () => {
        if (!head) return false;
    
        const map = new Map();
        let isValid = false;

        const find = (node) => {
            if (!node.next) return;

            map.set(node, true);
            if (map.get(node.next)) {
                isValid = true;
                return;
            }

            find(node.next);
        }

        find(head);
        return isValid;
    }
    
    const solutionB = () => {
        if (!head) return false;
        let isValid = false;
        
        const find = (node) => {
            if (!node.next) return;
            if (node.isRun) {
                isValid = true;
                return;
            }
            node.isRun = true;
            find(node.next);
        }
        
        find(head);
        return isValid;
    }
    
    const solutionC = () => {
        if (!head) return false;
        let node = head;
        let isValid = false;
        while (node.next) {
            if (node.val === null) {
                isValid = true;
                break;
            }
            node.val = null;
            node = node.next;
        }
        return isValid;
    }
    
    return solutionC();
};