/**
 * @lv 🟢
 * @link https://leetcode.com/problems/closest-binary-search-tree-value/
 * @name 270. Closest Binary Search Tree Value
 * @cate #recursion
 */
// Input: root = [4,2,5,1,3], target = 3.714286
const closestNumberBST = (root, target) => {
    let min = Number.MAX_SAFE_INTEGER;
    let minNum = root.val;
    const findMin = (root) => {
        if (!root) return;
        const diff = Math.abs(target - root.val);
        if (diff < min) {
            min = diff;
            minNum = root.val;
        }
        if (diff === 0) return;
        if (target > root.val) {
            findMin(root.right);
        } else {
            findMin(root.left);
        }
    }
    findMin(root);
    return minNum;
}