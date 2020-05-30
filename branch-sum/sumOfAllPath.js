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
var sumNumbers = function(root) {
    if (!root) return 0;
    const resultArr = [];
    
    const getSum = (node, arr) => {
        arr.push(node.val);
        if (!node.left && !node.right) {
            const num = Number(arr.join(''));
            resultArr.push(num);
            return;
        }
        if (node.left) getSum(node.left, [...arr]);
        if (node.right) getSum(node.right, [...arr]);
    }
    
    getSum(root, []);
    
    let ans = 0;
    for (let i = 0; i < resultArr.length; i++) {
        ans += resultArr[i];
    }
    
    return ans;
};