/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * 236. Lowest Common Ancestor of a Binary Tree
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const solutionA = () => {
        // solutionA: find path A, path B, find first common O(3*nlogn)
        let pFound = false;
        let pPath;
        const findP = (node, target, path) => {
            if (pFound) return;
            path.push(node.val);
            if (node === target) {
                pPath = path;
                pFound = true;
                return;
            }
            if (node.left) findP(node.left, p, [...path]);
            if (node.right) findP(node.right, p, [...path]);
        }
        findP(root, p, []);

        let qFound = false;
        let qPath;
        const findQ = (node, target, path) => {
            if (qFound) return;
            path.push(node.val);
            if (node === target) {
                qPath = path;
                qFound = true;
                return;
            }
            if (node.left) findQ(node.left, q, [...path]);
            if (node.right) findQ(node.right, q, [...path]);
        }
        findQ(root, q, []);

        let firstCommon;
        label:
        for (let i = pPath.length - 1; i >= 0; i--) {
            for (let j = qPath.length - 1; j >= 0; j--) {
                if (qPath[j] === pPath[i]) {
                    firstCommon = qPath[j];
                    break label;
                }
            }
        }

        let ans;
        const findAns = (node, val) => {
            if (ans !== undefined) return;
            if (node.val === val) {
                ans = node;
                return;
            }
            if (node.left) findAns(node.left, val);
            if (node.right) findAns(node.right, val);
        }
        findAns(root, firstCommon);

        return ans;
    }
    
    const solutionB = () => {
        let ans;
        const find = (node) => {
            if (ans !== undefined) return;
            
            let my = 0;
            let ls = 0;
            let rs = 0;
            
            if (node === p || node === q) {
                my = 1;
            }
            
            if (node.left) {
                ls = find(node.left);
            }
            
            if (node.right) {
                rs = find(node.right);
            }
            
            if ((my + ls + rs) === 2) {
                ans = node;
                return;
            }
            
            return my + ls + rs;
        }
        find(root);
        return ans;
    }
    
    const solutionC = () => {
        const findPath = (node, goal) => {
            if (!node) return null;
            
            if (node === goal) {
                return [goal];
            }
            
            const nodeLeft = findPath(node.left, goal);
            if (nodeLeft) {
                nodeLeft.unshift(node);
                return nodeLeft;
            }
            
            const nodeRight = findPath(node.right, goal);
            if (nodeRight) {
                nodeRight.unshift(node);
                return nodeRight;
            }
            
            return null;
        }
        
        const pathP = findPath(root, p);
        const pathQ = findPath(root, q);
        
        let ans;
        while (pathP.length > 0 && pathQ.length > 0) {
            const currP = pathP.shift();
            const currQ = pathQ.shift();
            if (currP === currQ) {
                ans = currP;
            } else {
                break;
            }
        }
        
        return ans;
    }
    
    return solutionC();
};