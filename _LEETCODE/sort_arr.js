/**
 * @lv 🟡
 * @link https://leetcode.com/problems/sort-an-array/
 * @name 912. Sort an Array
 * @cate #fundamental, #sort, #editor_pick
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // selection sort (ascending)
    const selectionSort = (arr) => {
        for(let i = 0; i < arr.length - 1; i++) {
          for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                const tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }  
          }  
        }
        return arr;
    }
    
    // insertion sort (ascending)
    const insertionSort = (arr) => {
        for(let i = 1; i < arr.length; i++) {
            const tmp = arr[i];
            insertLabel:
            for(let j = i - 1; j >= 0; j--) {
                if(arr[j] > tmp) {
                    arr[j+1] = arr[j];
                    arr[j] = tmp;
                    continue insertLabel;
                }
                break insertLabel;
            }
        }
        return arr;
    }
    
    // bubble sort (ascending)
    const bubbleSort = (arr) => {
        for(let i = 0; i < arr.length - 1; i++) {
            for(let j = 0; j < arr.length - i - 1; j++) {
                if(arr[j] > arr[j+1]) {
                    const tmp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = tmp;
                }
            }
        }
        return arr;
    }
    
    // quick sort (ascending)
    const quickSort = (arr) => {
        const quickRecursion = (data, startIndex, endIndex) => {
            if(data.length === 1) return data;
            
            const pivot = data[endIndex];
            let i = startIndex - 1;
            
            for(let j = startIndex; j < endIndex; j++) {
                if(data[j] <= pivot) {
                    i += 1;
                    if(j !== i) {
                        const tmp = data[j];
                        data[j] = data[i];
                        data[i] = tmp;
                    }
                }
            }
            
            data[endIndex] = data[i+1];
            data[i+1] = pivot;
            
            if(i > startIndex) quickRecursion(data, startIndex, i);
            if(endIndex > i+2) quickRecursion(data, i+2, endIndex);
            
            return data;
        }
        
        return quickRecursion(arr, 0, arr.length - 1);
    }
    
    // merge sort (ascending)
    const mergeSort = (arr) => {
        const merge = (arr1, arr2) => {
            const mergeResult = [];
            let pointerOne = 0;
            let pointerTwo = 0;
            
            for(let i = 0; i < arr1.length + arr2.length; i++) {
                if (pointerOne >= arr1.length) {
                    mergeResult.push(arr2[pointerTwo]);
                    pointerTwo += 1;
                    continue;
                }
                
                if (pointerTwo >= arr2.length) {
                    mergeResult.push(arr1[pointerOne]);
                    pointerOne += 1;
                    continue;
                }
                    
                if (arr1[pointerOne] < arr2[pointerTwo]) {
                    mergeResult.push(arr1[pointerOne]);
                    pointerOne += 1;
                } else {
                    mergeResult.push(arr2[pointerTwo]);
                    pointerTwo += 1;
                }
            }
            
            return mergeResult;
        }
        
        const mergeRecursion = (data) => {
            // 1. split arr until length = 1
            // 2. merge
            if (data.length <= 1) return data;
            
            const arr1 = mergeRecursion(data.slice(0, Math.round(data.length/2)));
            const arr2 = mergeRecursion(data.slice(Math.round(data.length/2)));
            
            return merge(arr1, arr2);
        }
        
        return mergeRecursion(arr);
    }
    
    // heap sort (ascending)
    const heapSort = (arr) => {
        // 1. create min heap tree
        // 2. delete from min heap and put the result in somewhere
        
        const result = [];
        const ht = []; // min-tree
        
        const insert = (value) => {
            ht.push(value);
            
            let currentPointer = ht.length - 1;
            let parentPointer = Math.floor((currentPointer - 1) / 2);
            
            while(currentPointer > 0 && currentPointer > parentPointer) {
                if (ht[currentPointer] < ht[parentPointer]) {
                    const tmp = ht[currentPointer];
                    ht[currentPointer] = ht[parentPointer];
                    ht[parentPointer] = tmp;
                    
                    currentPointer = parentPointer;
                    parentPointer = Math.floor((currentPointer - 1) / 2);
                    
                    continue;
                }
                break;
            }
        }
        
        for(let i = 0; i < arr.length; i++) {
            insert(arr[i]);
        }
        
        while(ht.length > 0) {
            const tmp = ht[0];
            ht[0] = ht[ht.length - 1];
            ht[ht.length - 1] = tmp;
            result.push(ht.pop());
            
            let currentPointer = 0;
            let pointerA = 2 * currentPointer + 1;
            let pointerB = 2 * currentPointer + 2;
            
            while(ht[pointerA] !== undefined || ht[pointerB] !== undefined) {
                if (ht[pointerA] !== undefined &&
                    ht[pointerB] !== undefined &&
                    ht[currentPointer] > ht[pointerA] && 
                    ht[currentPointer] > ht[pointerB]) {
                    if (ht[pointerA] < ht[pointerB]) {
                        const tmp = ht[currentPointer];
                        ht[currentPointer] = ht[pointerA];
                        ht[pointerA] = tmp;
                        
                        currentPointer = pointerA;
                        pointerA = 2 * currentPointer + 1;
                        pointerB = 2 * currentPointer + 2;
                        continue;
                    } else {
                        const tmp = ht[currentPointer];
                        ht[currentPointer] = ht[pointerB];
                        ht[pointerB] = tmp;
                        
                        currentPointer = pointerB;
                        pointerA = 2 * currentPointer + 1;
                        pointerB = 2 * currentPointer + 2;
                        continue;
                    }
                } else if (ht[pointerA] !== undefined &&
                           ht[currentPointer] > ht[pointerA]
                          ) {
                    const tmp = ht[currentPointer];
                    ht[currentPointer] = ht[pointerA];
                    ht[pointerA] = tmp;
                    
                    currentPointer = pointerA;
                    pointerA = 2 * currentPointer + 1;
                    pointerB = 2 * currentPointer + 2;
                    continue;
                } else if (ht[pointerB] !== undefined &&
                           ht[currentPointer] > ht[pointerB]
                          ) {
                    const tmp = ht[currentPointer];
                    ht[currentPointer] = ht[pointerB];
                    ht[pointerB] = tmp;
                    
                    currentPointer = pointerB;
                    pointerA = 2 * currentPointer + 1;
                    pointerB = 2 * currentPointer + 2;
                    continue;
                } else {
                    break;
                }
            }
        }
        
        return result;
    }
    
    const heapSortTwo = (arr) => {
        const swap = (data, indexA, indexB) => {
            const tmp = data[indexA];
            data[indexA] = data[indexB];
            data[indexB] = tmp;
        }
        
        const heapify = (data, rootIndex, maxLength) => {
            const indexL = 2 * rootIndex + 1;
            const indexR = 2 * rootIndex + 2;
            let maxIndex = rootIndex;
            
            if (indexL < maxLength && data[maxIndex] < data[indexL]) {
                maxIndex = indexL;
            }
            
            if (indexR < maxLength && data[maxIndex] < data[indexR]) {
                maxIndex = indexR;
            }
            
            if (maxIndex !== rootIndex) {
                swap(data, rootIndex, maxIndex);
                heapify(data, maxIndex, maxLength);
            }
        }
        
        // create max-heap
        const lastBranch = Math.floor((arr.length - 2) / 2);
        for(let i = lastBranch; i >= 0; i--) {
            heapify(arr, i, arr.length);
        }
        
        // get sort arr
        for(let j = arr.length - 1; j > 0; j--) {
            swap(arr, 0, j);
            heapify(arr, 0, j);
        }
        
        return arr;
    }
    
    return heapSortTwo(nums);
};