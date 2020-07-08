/**
 * @lv 🟡
 * @link https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 * @name Minimum Swaps 2
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

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], i);
    }
    let swaps = 0;
    for (let i = 0; i < arr.length; i++) {
        const target = map.get(i + 1);
        if (target !== i) {
            map.set(arr[i], target);
            map.set(i + 1, i);
            [arr[i], arr[target]] = [arr[target], arr[i]]
            swaps += 1;
        }
    }
    return swaps;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = minimumSwaps(arr);

    ws.write(res + '\n');

    ws.end();
}
