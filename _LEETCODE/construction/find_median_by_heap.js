/**
 * @lv 🔴
 * @link https://leetcode.com/problems/find-median-from-data-stream/
 * @name 295. Find Median from Data Stream
 * @cate #construction, #heap, #stream
 */

class Heap {
    constructor () {
        this.heap = [];
    }
    
    swap (i, j) {
        const tmp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = tmp;
    }
    
    left (i) {
        const idx = 2 * i + 1;
        return idx < this.getLen() ? idx : null;
    }
    
    right (i) {
        const idx = 2 * i + 2;
        return idx < this.getLen() ? idx : null;
    }
    
    parent (i) {
        if (i === 0) {
            return null;
        } else if (i === 1) {
            return 0;
        } else {
            return Math.round((i - 2) / 2);
        }
    }
    
    getLen () {
        return this.heap.length;
    }
    
    getRoot () {
        return this.heap[0];
    }
    
    deleteRoot () {
        const last = this.getLen() - 1;
        this.swap(last, 0);
        const root = this.heap.pop();
        this.heapify(0);   
        return root;
    }
}

class MaxHeap extends Heap {
    insert (val) {
        this.heap.push(val);
        let curr = this.getLen() - 1;
        let parent = this.parent(curr);
        while (parent !== null && this.heap[parent] < this.heap[curr]) {
            this.swap(parent, curr);
            curr = parent;
            parent = this.parent(curr);
        }
    }
    
    heapify (idx) {
        const left = this.left(idx);
        const right = this.right(idx);
        let max = idx;

        if (left !== null && this.heap[max] < this.heap[left]) {
            max = left;
        }
        if (right !== null && this.heap[max] < this.heap[right]) {
            max = right;
        }
        if (max !== idx) {
            this.swap(idx, max);
            this.heapify(max);
        }
    }
    
    getMax () {
        return this.heap[0];
    }
}

class MinHeap extends Heap {
    insert (val) {
        this.heap.push(val);
        let curr = this.getLen() - 1;
        let parent = this.parent(curr);
        while (parent !== null && this.heap[parent] > this.heap[curr]) {
            this.swap(parent, curr);
            curr = parent;
            parent = this.parent(curr);
        }
    }
    
    heapify (idx) {
        const left = this.left(idx);
        const right = this.right(idx);
        let min = idx;

        if (left !== null && this.heap[left] < this.heap[min]) {
            min = left;
        }
        if (right !== null && this.heap[right] < this.heap[min]) {
            min = right;
        }
        if (min !== idx) {
            this.swap(idx, min);
            this.heapify(min);
        }
    }
    
    getMin () {
        return this.heap[0];
    }
}

/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.maxHeap = new MaxHeap();
    this.minHeap = new MinHeap();
    this.count = 0;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.count += 1;
    let min = this.minHeap.getMin();
    let max = this.maxHeap.getMax();
    
    if (num >= max) {
        this.minHeap.insert(num);
    } else {
        this.maxHeap.insert(num);
    }

    if (this.minHeap.getLen() > this.maxHeap.getLen()) {
        // balance
        const minRoot = this.minHeap.deleteRoot();
        this.maxHeap.insert(minRoot);
    }
    
    if (this.maxHeap.getLen() - this.minHeap.getLen() > 1) {
        // balance
        const maxRoot = this.maxHeap.deleteRoot();
        this.minHeap.insert(maxRoot);
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.count % 2 === 0) {
        return (this.maxHeap.getRoot() + this.minHeap.getRoot()) / 2;
    }
    return this.maxHeap.getRoot();
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */