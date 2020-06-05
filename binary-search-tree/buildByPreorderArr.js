/**
 * https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/
 * 1008. Construct Binary Search Tree from Preorder Traversal
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    // X
    const solutionA = () => {
        if (!preorder || preorder.length < 1) return null;
        
        preorder.sort((a, b) => (a - b));

        const preNode = new TreeNode(0, null, null);
        const buildTree = (start, end) => {
            if (start > end) return null;

            const mid = Math.ceil((start + end) / 2);
            const val = preorder[mid];
            const node = new TreeNode(val, null, null);

            node.left = buildTree(start, mid - 1);
            node.right = buildTree(mid + 1, end);

            return node;
        }

        preNode.left = buildTree(0, preorder.length - 1);

        return preNode.left;
    }
    
    // X
    const solutionB = () => {
        if (!preorder || preorder.length < 1) return null;
        
        const root = new TreeNode(preorder[0], null, null);
        preorder.sort((a, b) => (a - b));
        
        const buildTree = (start, end) => {
            if (start > end) return null;
            const mid = Math.floor((start + end) / 2);
            const val = preorder[mid];
            const node = new TreeNode(val, null, null);
            node.left = buildTree(start, mid - 1);
            node.right = buildTree(mid + 1, end);
            return node;
        }
        
        const idx = preorder.indexOf(root.val);
        root.left = buildTree(0, idx - 1);
        root.right = buildTree(idx + 1, preorder.length - 1);
        
        return root;
    }
    
    // O
    const solutionC = () => {
        const buildTree = (startIdx, endIdx) => {
            const pivot = preorder[startIdx];
            const node = new TreeNode(pivot, null, null);
            
            if (startIdx >= endIdx) return node;
            
            let smallIdx, largeIdx;
            for (let i = startIdx + 1; i <= endIdx; i++) {
                if (largeIdx !== undefined) break;
                if (smallIdx === undefined && preorder[i] < pivot) {
                    smallIdx = i;
                }
                if (largeIdx === undefined && preorder[i] > pivot) {
                    largeIdx = i;
                }
            }
            
            if (smallIdx !== undefined) {
                const leftEnd = largeIdx !== undefined ? largeIdx - 1 : endIdx;
                node.left = buildTree(smallIdx, leftEnd);
            }
            if (largeIdx !== undefined) node.right = buildTree(largeIdx, endIdx);
            
            return node;
        }
        
        const root = buildTree(0, preorder.length - 1);
        return root;
    }
    
    // O
    const solutionD = () => {
        let idx = 0;
        const buildTree = (min, max) => {
            const val = preorder[idx];
            const node = new TreeNode(val, null, null);
            
            idx += 1;
            
            // left
            if (preorder[idx] !== undefined && 
                preorder[idx] > min && 
                preorder[idx] < max &&
                preorder[idx] < val) {
                node.left = buildTree(min, val);
            }

            // right
            if (preorder[idx] !== undefined && 
                preorder[idx] > min && 
                preorder[idx] < max &&
                preorder[idx] > val) {
                node.right = buildTree(val, max);
            }
                
            return node;
        }
        
        const root = buildTree(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
        
        return root;
    }
    
    // O
    const solutionE = () => {
        const bstFromPreorderStep = (preorder, min, max) => {
            if(preorder.length === 0){
                // we are done
                return null;
            }
            const val = preorder[0];
            if(val < min || val > max) {
                // out of range for this position, step up
                return null;
            }
            // proceed with the node
            const node = new TreeNode(preorder.shift());
            node.left = bstFromPreorderStep(preorder, min, val);
            node.right = bstFromPreorderStep(preorder, val, max);
            return node;
        }
        
        return bstFromPreorderStep(preorder, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    }
    
    return solutionE();
};