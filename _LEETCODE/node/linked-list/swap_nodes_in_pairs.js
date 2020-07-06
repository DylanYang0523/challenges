/**
 * @lv 🟢
 * @link https://leetcode.com/problems/swap-nodes-in-pairs/
 * @name 24. Swap Nodes in Pairs
 * @cate #linked_list, #node, #recursion, #to_be_optimized
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head) return null;
  const fake = new ListNode(null, null);
  const swap = (prev, curr) => {
      const next = curr.next;
      if (!next) {
          prev.next = curr;
          return;
      }
      
      const nNext = next && next.next;
      next.next = curr;
      prev.next = next;
      if (nNext) {
          swap(curr, nNext);
      } else {
          curr.next = nNext;
      }
  }
  swap(fake, head);
  return fake.next;
};