/**
 * @lv 🔴
 * @link https://leetcode.com/problems/reverse-nodes-in-k-group/
 * @name 25. Reverse Nodes in k-Group
 * @cate #editor_pick, #linked_list, #node
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  // didn't use constant extra memory, S: O(n*k)
  const solutionA = () => {
      if (!head) return null;
      const fake = new ListNode(null, null);
      const reverse = (prev, curr) => {
          const arr = [];
          let pointer = curr;
          for (let i = 0; i < k; i++) {
              arr.push(pointer);
              if (!pointer.next) break;
              pointer = pointer.next;
          }

          if (arr.length !== k) {
              prev.next = curr;
              return;
          }

          const nextCurr = arr[k - 1].next; // 4
          for (let i = k - 1; i >= 1; i--) {
              arr[i].next = arr[i - 1];
          }

          prev.next = arr[k - 1];
          if (nextCurr) {
              reverse(arr[0], nextCurr);
          } else {
              arr[0].next = null;
          }
      }
      reverse(fake, head);
      return fake.next;
  }
  
  const solutionB = () => {
      const reverse = (prev) => {
          const tail = prev.next;
          let count = 1;
          while (count < k) {
              const temp = tail.next.next;
              tail.next.next = prev.next;
              prev.next = tail.next;
              tail.next = temp;
              count += 1;
          }
          return tail;
      }
      
      const checkLen = (node) => {
          let pointer = node;
          let count = 0;
          while (count < k) {
              pointer = pointer.next;
              if (pointer) {
                  count += 1;
              } else {
                  break;
              }
          }
          return count === k;
      }
      
      const dummy = new ListNode(null, head);
      
      let prev = dummy;
      while (checkLen(prev)) { prev = reverse(prev); }
      
      return dummy.next;
  }
  
  const solutionC = () => {
      if (!head || k === 1) return head;
      
      const dummy = new ListNode(null, head);
      let len = 0;
      let pointerA = dummy;
      while (pointerA.next) {
          len += 1;
          pointerA = pointerA.next;
      }
      
      pointerA = dummy;
      let pointerB = pointerA.next;
      while (len >= k) {
          for (let i = 1; i < k; i++) {
              const tmp = pointerB.next.next;
              pointerB.next.next = pointerA.next;
              pointerA.next = pointerB.next;
              pointerB.next = tmp;
          }
          pointerA = pointerB;
          pointerB = pointerA.next;
          len -= k;
      }
      
      return dummy.next;
  }
  
  return solutionC();
};