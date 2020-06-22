/**
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * 34. Find First and Last Position of Element in Sorted Array
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const solutionA = () => {
        let numsLength = nums.length;
        let startIndex = 0;
        let endIndex = numsLength - 1;
        let resultArr = [-1,-1];
        let startFromIndex = -1;

        while (startIndex <= endIndex) {
            const midIndex = Math.floor((startIndex + endIndex) / 2);
            if (nums[midIndex] === target) {
                startFromIndex = midIndex;
                break;
            }
            if (nums[midIndex] > target) {
                endIndex = midIndex - 1;
                continue;
            }
            if (nums[midIndex] < target) {
                startIndex = midIndex + 1;
                continue;
            }
        }

        if (startFromIndex >= 0) {
            let realStartIndex = startFromIndex;
            while (nums[realStartIndex - 1] === target) {
                realStartIndex -= 1;
            }
            resultArr[0] = realStartIndex;

            let realEndIndex = startFromIndex;
            while (nums[realEndIndex + 1] === target) {
                realEndIndex += 1;
            }
            resultArr[1] = realEndIndex;
        }

        return resultArr;
    }
    
    const solutionB = () => {
        let start = 0;
        let end = nums.length - 1;
        let mid = undefined;
        let canFound = false;
        while (end >= start) {
            mid = Math.floor((start + end) / 2);
            if (nums[mid] === target) {
                canFound = true;
                break;
            }
            if (nums[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        if (canFound) {
            const ans = [];
            let idxS = start;
            let idxE = mid;
            let idxM = undefined;
            while (idxS !== idxE) {
                idxM = Math.floor((idxS + idxE) / 2);
                if (nums[idxM] === target) {
                    idxE = idxM;
                } else {
                    idxS = idxM + 1;
                }
            }
            ans.push(idxE);
            idxS = mid;
            idxE = end;
            while (idxS !== idxE) {
                idxM = Math.round((idxS + idxE) / 2);
                if (nums[idxM] === target) {
                    idxS = idxM;
                } else {
                    idxE = idxM - 1;
                }
            }
            ans.push(idxS);
            return ans;
        } else {
            return [-1, -1];
        }
    }
    
    return solutionB();
};