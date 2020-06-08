'use strict';
// https://www.hackerrank.com/challenges/coin-change/problem?isFullScreen=true

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'getWays' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. LONG_INTEGER_ARRAY c
 */

function getWays(n, c) {
    // Write your code here
    const solutionA = () => {
        const memo = {};
        let count = 0;
        const find = (total, path) => {
            for (let i = 0; i < c.length; i++) {
                const next = total - c[i];
                if (next < 0) continue;

                const newPath = [...path];
                newPath.push(c[i]);
                newPath.sort((a, b) => (a - b));

                const newPathStr = newPath.join('');
                if (memo[newPathStr] === undefined) {
                    memo[newPathStr] = true;
                    if (next > 0) {
                        find(next, newPath);
                    } else if (next === 0) {
                        count += 1;
                    }
                }
            }
        }
        find(n, []);
        return count;
    }
    
    const solutionB = () => {
        // n = num, c = arr
        let metrix = [];
        for (let i = 0; i < c.length + 1; i++) {
            metrix.push([]);
            for (let j = 0; j < n + 1; j++) {
                if (j === 0) {
                    metrix[i][j] = 1;
                    continue;
                }
                if (i === 0) {
                    metrix[i][j] = 0;
                    continue;
                }
                const without = metrix[i-1][j];
                const withnum = metrix[i][j-c[i-1]];
                let current = without;
                if (withnum !== undefined) {
                    current += withnum;
                }
                metrix[i][j] = current;
            }
        }
        return metrix[c.length][n];
    }

    return solutionB();
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const c = readLine().replace(/\s+$/g, '').split(' ').map(cTemp => parseInt(cTemp, 10));

    // Print the number of ways of making change for 'n' units using coins having the values given by 'c'

    const ways = getWays(n, c);

    ws.write(ways + '\n');

    ws.end();
}
