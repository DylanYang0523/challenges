/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.stream = [];
    this.count = 0;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.stream.push(num);
    this.stream.sort((a, b) => (a - b));
    this.count += 1;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.count % 2 === 1) {
        return this.stream[Math.floor(this.count / 2)];
    }
    return (this.stream[this.count / 2] + this.stream[this.count / 2 - 1]) / 2;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */