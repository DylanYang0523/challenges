/**
 * @lv 🟡
 * @link https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/
 * @name 109. Convert Sorted List to Binary Search Tree
 * @cate #tree, #linked_list, #node
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (!head) return null;
    
    const arr = [];
    
    const buildArr = (node) => {
        arr.push(node.val);
        if (node.next) buildArr(node.next);
    }
    buildArr(head);
    
    const buildTree = (startIdx, endIdx) => {
        if (startIdx > endIdx) return null;
        
        const mid = Math.ceil((startIdx + endIdx) / 2);
        const midVal = arr[mid];
        
        const node = new TreeNode(midVal, null, null);
        node.left = buildTree(startIdx, mid - 1);
        node.right = buildTree(mid + 1, endIdx);
        
        return node;
    }
    
    const root = buildTree(0, arr.length - 1);
    
    return root;
};