/**
 * https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/
 * 865. Smallest Subtree with all the Deepest Nodes
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
    if (!root) return root;
    
    let paths = []; 
    let max = Number.MIN_SAFE_INTEGER;
    
    const findDepest = (node, depth, prePath) => {
        const path = [...prePath];
        path.push(node);
        
        if (!node.left && !node.right) {
            if (depth > max) {
                max = depth;
                paths = [];
                paths.push(path);
                return;
            } else if (depth === max) {
                paths.push(path);
                return;
            } else {
                return;
            }
        }
        
        if (node.left) findDepest(node.left, depth + 1, path);
        if (node.right) findDepest(node.right, depth + 1, path);
    }
    
    findDepest(root, 0, []);
    
    if (paths.length > 1) {
        let targetNode = root;
        label:
        for (let i = 0; i <= max; i++) {
            const node = paths[0][i];
            for (let j = 1; j < paths.length; j++) {
                if (paths[j][i] !== node) {
                    targetNode = paths[j][i-1];
                    break label;
                }
            }
        }
        return targetNode;
    } else {
        return paths[0][max];
    }
    
};