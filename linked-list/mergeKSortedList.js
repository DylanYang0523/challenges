/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * https://leetcode.com/problems/merge-k-sorted-lists/
 * 23. Merge k Sorted Lists
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    // only has one arr or null;
    if (lists.length < 1) return null;
    if (lists.length === 1) return lists[0];
    
    const listsArr = [];
    for (let i = 0; i < lists.length; i++) {
        const curr = [];
        let pointer = lists[i];
        while (pointer !== null) {
            curr.push(pointer.val);
            pointer = pointer.next;
        }
        listsArr.push(curr);
    }
    
    let superArr = [];
    for(let i = 0; i < listsArr.length; i++) {
        superArr = superArr.concat(listsArr[i]);    
    }
    if (superArr.length < 1) return null;
    
    superArr.sort((a, b) => (a - b));
    const superList = new ListNode(superArr[0], null);
    let superPointer = superList;
    for (let i = 1; i < superArr.length; i++) {
        const node = new ListNode(superArr[i], null);
        superPointer.next = node;
        superPointer = superPointer.next;
    }
    
    return superList;
};