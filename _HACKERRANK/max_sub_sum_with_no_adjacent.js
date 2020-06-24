/**
 * @lv 🟡
 * @link https://www.hackerrank.com/challenges/max-array-sum/problem?isFullScreen=true
 * @name Max Array Sum
 * @cate #optimal, #states_control
 */

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the maxSubsetSum function below.
function maxSubsetSum(arr) {
    let max = Number.MIN_SAFE_INTEGER;
    let preIn = 0;
    let preEx = 0;
    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        const currIn = preEx + curr;
        const currEx = Math.max(preIn, preEx);
        max = Math.max(currIn, currEx, max);
        preIn = currIn;
        preEx = currEx;
    }
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = maxSubsetSum(arr);

    ws.write(res + '\n');

    ws.end();
}
