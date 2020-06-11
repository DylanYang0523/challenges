/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.maxHeap = [];
    this.minHeap = [];
    this.count = 0;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    const swap = (arr, idx1, idx2) => {
        const tmp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = tmp;
    }
    
    const minHeapify = (arr, idx) => {
        const leftIdx = 2 * idx + 1;
        const rightIdx = 2 * idx + 2;
        let minIdx = idx;
        
        if (arr[leftIdx] !== undefined && arr[leftIdx] < arr[minIdx]) {
            minIdx = leftIdx;
        }
        
        if (arr[rightIdx] !== undefined && arr[rightIdx] < arr[minIdx]) {
            minIdx = rightIdx;
        }
        
        if (minIdx !== idx) {
            swap(arr, idx, minIdx);
            minHeapify(arr, minIdx);
        }
    }
    
    const maxHeapify = (arr, idx) => {
        const leftIdx = 2 * idx + 1;
        const rightIdx = 2 * idx + 2;
        let maxIdx = idx;
        
        if (arr[leftIdx] !== undefined && arr[maxIdx] < arr[leftIdx]) {
            maxIdx = leftIdx;
        }
        if (arr[rightIdx] !== undefined && arr[maxIdx] < arr[rightIdx]) {
            maxIdx = rightIdx;
        }
        if (maxIdx !== idx) {
            swap(arr, idx, maxIdx);
            maxHeapify(arr, maxIdx);
        }
    }
    
    this.count += 1;
    let min = this.minHeap[0];
    let max = this.maxHeap[0];
    
    if (num >= max) {
        this.minHeap.push(num);
        const startIdx = Math.floor((this.minHeap.length - 2) / 2);
        for (let i = startIdx; i >= 0; i--) {
            minHeapify(this.minHeap, i);
        }
    } else {
        this.maxHeap.push(num);
        const startIdx = Math.floor((this.maxHeap.length - 2) / 2);
        for (let i = startIdx; i >= 0; i--) {
            maxHeapify(this.maxHeap, i);   
        }
    }
    
    if (this.minHeap.length > this.maxHeap.length) {
        // balance
        min = this.minHeap[0];
        this.minHeap[0] = this.minHeap[this.minHeap.length - 1];
        this.minHeap.pop();
        minHeapify(this.minHeap, 0);
        
        max = this.maxHeap[0];
        this.maxHeap.push(max);
        this.maxHeap[0] = min;
        
        const startIdx = Math.floor((this.maxHeap.length - 2) / 2);
        for (let i = startIdx; i >= 0; i--) {
            maxHeapify(this.maxHeap, i);   
        }
    }
    
    if (this.maxHeap.length - this.minHeap.length > 1) {
        // balance
        max = this.maxHeap[0];
        this.maxHeap[0] = this.maxHeap[this.maxHeap.length - 1];
        this.maxHeap.pop();
        maxHeapify(this.maxHeap, 0);

        min = this.minHeap[0];
        this.minHeap.push(min);
        this.minHeap[0] = max;
        
        const startIdx = Math.floor((this.minHeap.length - 2) / 2);
        for (let i = startIdx; i >= 0; i--) {
            minHeapify(this.minHeap, i);
        }
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.count % 2 === 0) {
        return (this.maxHeap[0] + this.minHeap[0]) / 2;
    }
    return this.maxHeap[0];
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */