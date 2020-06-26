/**
 * @lv 🟢
 * @link https://leetcode.com/problems/min-stack/submissions/
 * @name 155. Min Stack
 */

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.min = undefined;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if (this.min !== undefined) {
        this.min = this.min > x ? x : this.min;
    } else {
        this.min = x;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const curr = this.stack.pop();
    if (curr !== undefined && this.min === curr) {
        const tmp = [...this.stack];
        tmp.sort((a, b) => (a - b));
        this.min = tmp[0];
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.stack.length > 0) return this.stack[this.stack.length - 1];
    return null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */