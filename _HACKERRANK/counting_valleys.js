/**
 * @lv 🟢
 * @link https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=warmup
 * @name Counting Valleys
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

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countingValleys function below.
function countingValleys(n, s) {
    // isEnterValley, valleyCount, currentAltitude
    const stepMap = { 'U': 1, 'D': -1 };
    let currentAltitude = 0,
        isEnterValley = false,
        valleyCount = 0;
    for (let i = 0; i < n; i++) {
        currentAltitude += stepMap[s[i]];
        if (isEnterValley) {
            if (currentAltitude === 0) {
                valleyCount += 1;
                isEnterValley = false;
            }
        } else {
            if (currentAltitude < 0) {
                isEnterValley = true;
            }
        }
    }
    return valleyCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}