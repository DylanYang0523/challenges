/**
 * @lv 🟡
 * @link https://leetcode.com/problems/clone-graph/
 * @name 133. Clone Graph
 * @cate #graph, #node, #recursion
 */
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) return;
    
    const map = new Map();
    
    const recursion = (n) => {
        if (map.get(n)) return map.get(n);
        
        const newNode = new Node(n.val, []);
        map.set(n, newNode);
        
        for (let i = 0; i < n.neighbors.length; i++) {
            newNode.neighbors.push(recursion(n.neighbors[i]));
        }
        
        return newNode;
    }
    
    return recursion(node);
};