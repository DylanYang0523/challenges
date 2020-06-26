/**
 * @lv 🟡
 * @link https://leetcode.com/problems/product-of-array-except-self/
 * @name 238. Product of Array Except Self
 * @cate #editor_pick
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const output = [];
    
    const solutionA = () => {
        const getPostsum = (presum, i) => {
            if (i >= nums.length) return 1;
            const num = nums[i];
            const postsum = getPostsum(presum * num, i + 1);
            output[i] = presum * postsum;
            return postsum * num;
        }
        getPostsum(1, 0);
    }
    
    const solutionB = () => {
        let productsLeftOfMe = 1
        for(let i = 0; i < nums.length; i++){
            output[i] = productsLeftOfMe
            productsLeftOfMe *= nums[i]
        }
        let productsRightOfMe = 1
        for(let i = nums.length-1; i >= 0; i--){
            output[i] *= productsRightOfMe
            productsRightOfMe *= nums[i]
        }
    }
    
    solutionA();
    
    return output;
};