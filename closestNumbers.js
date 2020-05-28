// https://www.hackerrank.com/challenges/closest-numbers/problem?isFullScreen=true
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the closestNumbers function below.
function closestNumbers(arr) {
    arr.sort((a, b) => a - b);
    let min = Number.MAX_SAFE_INTEGER;
    let ans = [];
    for(let i = 0; i < arr.length - 1; i++) {
        const diff = Math.abs(arr[i+1] - arr[i]);
        if (diff === min) {
            ans.push(arr[i]);
            ans.push(arr[i+1]);
        } else if (diff < min) {
            min = diff;
            ans = [];
            ans.push(arr[i]);
            ans.push(arr[i+1]);
        } else {
            continue;
        }
    }
    return ans;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = closestNumbers(arr);

    ws.write(result.join(" ") + "\n");

    ws.end();
}