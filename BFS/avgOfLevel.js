/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://leetcode.com/problems/average-of-levels-in-binary-tree/
 * 637. Average of Levels in Binary Tree
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    // breadth first
    const solutionA = () => {
        if (!root) return [];
    
        const ans = [];
        const queueA = [root];
        const queueB = [];

        while (queueA.length !== 0 || queueB.length !== 0) {
            let count = 0;
            let total = 0;

            while (queueA.length !== 0) {
                const curr = queueA.shift();
                count += 1;
                total += curr.val;
                if (curr.left) {
                    queueB.push(curr.left);
                }
                if (curr.right) {
                    queueB.push(curr.right);
                }
            }

            if (count !== 0) ans.push(total / count);

            count = 0;
            total = 0;

            while (queueB.length !== 0) {
                const curr = queueB.shift();
                count += 1;
                total += curr.val;
                if (curr.left) {
                    queueA.push(curr.left);
                }
                if (curr.right) {
                    queueA.push(curr.right);
                }
            }

            if (count !== 0) ans.push(total / count);
        }

        return ans;
    }
    
    // breadth first
    const solutionAA = () => {
        if (!root) return [];
    
        const ans = [];
        const queue = [root];

        while (queue.length !== 0) {
            const currLen = queue.length;
            let total = 0;
            for (let i = 0; i < currLen; i++) {
                const curr = queue.shift();
                total += curr.val;
                if (curr.left) {
                    queue.push(curr.left);
                }
                if (curr.right) {
                    queue.push(curr.right);
                }
            }
            ans.push(total / currLen);
        }

        return ans;
    }
    
    // deep first
    const solutionB = () => {
        const sum = [];
        const count = [];
        
        const deepFind = (node, level) => {
            if (sum[level] === undefined) sum[level] = 0;
            if (count[level] === undefined) count[level] = 0;
            sum[level] += node.val;
            count[level] += 1;
            if (node.left) deepFind(node.left, level + 1);
            if (node.right) deepFind(node.right, level + 1);
        }
        deepFind(root, 0);
        
        for (let i = 0; i < sum.length; i++) {
            sum[i] = sum[i] / count[i];
        }
        
        return sum;
    }
    
    return solutionAA();
};