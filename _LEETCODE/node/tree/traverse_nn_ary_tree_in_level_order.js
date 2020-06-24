/**
 * @lv 🟢
 * @link https://leetcode.com/problems/n-ary-tree-level-order-traversal/
 * @name 429. N-ary Tree Level Order Traversal
 * @cate #node, #queue, #tree
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const solutionA = () => {
        // deep first with recursion
        if (!root) return [];
        const ans = [];
        const deep = (node, level) => {
            if (ans[level] === undefined) ans[level] = [];
            ans[level].push(node.val);
            if (node.children) {
                for (let i = 0; i < node.children.length; i++) {
                    deep(node.children[i], level + 1);
                }   
            }
        }
        
        deep(root, 0);
        return ans;
    }
    
    const solutionB = () => {
        // breadth first
        if (!root) return [];
        const ans = [];
        const queue = [root];
        while (queue.length !== 0) {
            const len = queue.length;
            const tmp = [];
            for (let i = 0; i < len; i++) {
                const curr = queue.shift();
                tmp.push(curr.val);
                if (curr.children) {
                    for (let j = 0; j < curr.children.length; j++) {
                        queue.push(curr.children[j]);
                    }   
                }
            }
            ans.push(tmp);
        }
        return ans;
    }
    
    return solutionB();
};