/**
 * @lv 🟢
 * @link https://leetcode.com/problems/binary-tree-level-order-traversal/
 * @name 102. Binary Tree Level Order Traversal
 * @cate #queue, #node
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    
    const queue = [root];
    const ans = [];
    
    while (queue.length !== 0) {
        const lvLen = queue.length;
        const tmp = [];
        for (let i = 0; i < lvLen; i++) {
            const curr = queue.shift();
            tmp.push(curr.val);
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        ans.push(tmp);
    }
    
    return ans;
};