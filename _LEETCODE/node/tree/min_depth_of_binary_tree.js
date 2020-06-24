/**
 * @lv 🟢
 * @link https://leetcode.com/problems/minimum-depth-of-binary-tree/
 * @name 111. Minimum Depth of Binary Tree
 * @cate #node, #queue
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
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) return 0;
    
    let min = 0;
    const queue = [
        {
            deep: 1,
            node: root
        }
    ];
    
    while(queue.length > 0) {
        const obj = queue.shift();
        const node = obj.node;
        const deep = obj.deep;
        if (!node.left && !node.right) {
            min = deep;
            break;
        }
        if (node.left) queue.push({
            deep: deep + 1,
            node: node.left
        })
        if (node.right) queue.push({
            deep: deep + 1,
            node: node.right
        })
    }
    
    return min;
};