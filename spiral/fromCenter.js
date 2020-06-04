// https://www.hackerrank.com/contests/zoho-pr/challenges/spiral-traversal/problem
/**
 * Given a square matrix(n is odd) , print the elements in spiral order starting from the center till array[0][0]th element.
 * 
 * Input Format:
 * The first line contains an integer N which represents row and column size.
 * The next N lines contains N elements which represents the array values.
 * 
 * Output Format:
 * Print the Spiral order
 */
function processData(input) {
    //Enter your code here
    if (!input || input.length < 1) return null;
    if (input.length === 1) return input[0];
    
    const len = input.length;
    const mid = Math.floor(len / 2);
    const ans = [];
    const center = input[mid][mid];
    ans.push(center);
    
    let count = 0;
    let times = 1;
    let i = mid, j = mid;
    let direction = 1; // 1: left, 2: down, 3: right, 4: up
    
    const checkC = () => {
        if (count === 2) {
            count = 0;
            times += 1;
        }
    }
    
    label:
    while (true) {
        if (direction === 1) {
            count += 1;
            for (let k = 0; k < times; k++) {
                j -= 1;
                const target = input[i][j];
                if (target === undefined) break label;
                ans.push(target);
            }
            checkC();
            direction = 2;
        } else if (direction === 2) {
            count += 1;
            for (let k = 0; k < times; k++) {
                i += 1;
                const target = input[i][j];
                if (target === undefined) break label;
                ans.push(target);
            }
            checkC();
            direction = 3;
        } else if (direction === 3) {
            count += 1;
            for (let k = 0; k < times; k++) {
                j += 1;
                const target = input[i][j];
                if (target === undefined) break label;
                ans.push(target);
            }
            checkC();
            direction = 4;
        } else {
            count += 1;
            for (let k = 0; k < times; k++) {
                i -= 1;
                const target = input[i][j];
                if (target === undefined) break label;
                ans.push(target);
            }
            checkC();
            direction = 1;
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
    [1,  2,  3,  4,  5],
    [6,  7,  8,  9,  10 ],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
]

const result = processData(test2);
console.log('result:', result);