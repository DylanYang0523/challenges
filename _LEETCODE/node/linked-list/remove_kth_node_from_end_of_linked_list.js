/**
 * @lv 🟡
 * @link https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * @name 19. Remove Nth Node From End of List
 * @cate #editor_pick, #node, #linked_list
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    const solutionA = () => {
        let count = 0;
        const fake = new ListNode(0, head);
        const findTarget = (node) => {
            let found = null;
            if (node.next) found = findTarget(node.next);
            count += 1;
            if (found !== null) {
                node.next = found.next;
                return null;
            }   
            if (count === n) return node;
            return null;
        }
        findTarget(fake);
        return fake.next;   
    }
    
    const solutionB = () => {
        const map = {};
        let len = 0;
        let pointer = head;
        while (pointer) {
            len += 1;
            map[len] = pointer;
            pointer = pointer.next;
        }
        const target = len - n + 1;
        if (target === 1) {
            head = head.next;
        } else if (target === len) {
            map[target - 1].next = null;
        } else {
            map[target - 1].next = map[target].next;
        }
        return head;
    }
    
    const solutionC = () => {
        let pointerA = head;
        let pointerB = undefined;
        for (let i = 0; i < n; i++) {
            pointerA = pointerA.next;
        }
        while (pointerA) {
            pointerA = pointerA.next;
            pointerB = pointerB ? pointerB.next : head;
        }
        if (pointerB) {
            pointerB.next = pointerB.next.next;
        } else {
            head = head.next;
        }
        return head;
    }
    
    return solutionC();
};