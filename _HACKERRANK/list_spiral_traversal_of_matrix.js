/**
 * @lv 🟢
 * @link https://www.hackerrank.com/contests/coding-test-1-bits-hyderabad/challenges/spiral-matrix-1
 * @name Spiral Matrix 1
 */
function processData(input) {
    //Enter your code here
    if (!input || input.length < 1) return [];
    
    const h = input.length;
    const w = input[0].length;
    const ans = [];
    
    let hTimes = h - 1;
    let wTimes = w;
    let direction = 1; // 1: right, 2: down, 3: left, 4: up
    let successTimes = 0;
    while (hTimes >= 0 && wTimes >= 0) {
        if (direction === 1) {
            for (let i = successTimes; i < w - successTimes; i++) {
                ans.push(input[successTimes][i]);
            }
            wTimes -= 1;
            direction = 2;
        } else if (direction === 2) {
            for (let i = successTimes + 1; i < h - successTimes; i++) {
                ans.push(input[i][w - 1 - successTimes]);
            }
            hTimes -= 1;
            direction = 3;
        } else if (direction === 3) {
            for (let i = w - 1 - successTimes - 1; i >= successTimes; i--) {
                ans.push(input[h - 1 - successTimes][i]);
            }
            wTimes -= 1;
            direction = 4;
        } else {
            for (let i = h - 1 - successTimes - 1; i >= successTimes + 1; i--) {
                ans.push(input[i][successTimes]);
            }
            hTimes -= 1;
            direction = 1;
            successTimes += 1;
        }
    }

    return ans;
} 

const test1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

const test2 = [
    [1, 2, 3],
    [4, 5, 6]
]

const test3 = [
    [1],
    [2],
    [3]
]

const test4 = [
    [1, 2, 3]
]

const test5 = [
    [1,  2,  3,  4,  5],
    [6,  7,  8,  9,  10 ],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
]

const result = processData(test5);
console.log('result:', result);