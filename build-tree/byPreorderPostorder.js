/**
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/
 * 889. Construct Binary Tree from Preorder and Postorder Traversal
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {
    const solutionA = () => {
        // 1. write a buildTree func which accept 4 params {preSIdx, preEIdx, postSIdx, postEIdx}
        // 2. use "pre[preSIdx]" as the node value to create a TreeNode
        // 3. use "preSIdx + 1" to find the node.left's value "leftVal" from pre
        // 4. use the "leftVal" to find out the potential length "leftLen" from the post
        // 5. calculate the node.right's index "rightSIdx" by "preSIdx + leftLen + 1"
        // 6. call buildTree recursion with new 4 params seperately

        const buildTree = (preSIdx, preEIdx, postSIdx, postEIdx) => {
            const val = pre[preSIdx];
            const node = new TreeNode(val, null, null);

            const leftVal = pre[preSIdx + 1];
            let leftPostIdx;
            for (let i = postSIdx; i <= postEIdx; i++) {
                if (post[i] === leftVal) {
                    leftPostIdx = i;
                    break;
                }
            }

            const leftLen = leftPostIdx - postSIdx + 1;
            const rightSIdx = preSIdx + leftLen + 1;

            if (preSIdx + 1 <= preSIdx + leftLen) node.left = buildTree(preSIdx + 1, preSIdx + leftLen, postSIdx, leftPostIdx);
            if (rightSIdx <= preEIdx) node.right = buildTree(rightSIdx, preEIdx, leftPostIdx + 1, postEIdx - 1);

            return node;
        }

        const len = pre.length;
        const root = buildTree(0, len - 1, 0, len - 1);

        return root;
    }
    
    const solutionB = () => {
        const buildTree = (newPre, newPost) => {
            if (!newPre || newPre.length < 1) return null;
            
            const val = newPre[0]
            const node = new TreeNode(val, null, null)
            
            const leftVal = newPre[1];
            if (leftVal === undefined) return node;
            
            let leftIdxInPost;
            for (let i = 0; i < newPost.length; i++) {
                if (newPost[i] === leftVal) {
                    leftIdxInPost = i;
                    break;
                }
            }
            
            const leftTreeLen = leftIdxInPost + 1;
            
            node.left = buildTree(newPre.slice(1, leftTreeLen + 1), newPost.slice(0, leftIdxInPost + 1));
            node.right = buildTree(newPre.slice(leftTreeLen + 1), newPost.slice(leftIdxInPost + 1, newPost.length - 1));
            
            return node;
        }
        
        return buildTree(pre, post);
    }
    
    return solutionB();
};