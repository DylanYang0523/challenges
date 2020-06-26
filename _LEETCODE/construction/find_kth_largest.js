/**
 * @lv 🟢
 * @link https://leetcode.com/problems/kth-largest-element-in-a-stream/
 * @name 703. Kth Largest Element in a Stream
 * @cate #stream
 */
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.stream = getStream(nums) || [];
    
    function getStream(nums) {
        nums.sort((a, b) => (b - a));
        return nums.slice(0, k).sort((a, b) => (a - b));
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if (this.stream.length < this.k) {
        this.stream.unshift(val);
        this.stream.sort((a, b) => (a - b));
    } else if (val > this.stream[0]) {
        this.stream.shift();
        this.stream.unshift(val);
        this.stream.sort((a, b) => (a - b));
    }
    return this.stream[0];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */