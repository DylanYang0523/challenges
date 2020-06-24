/**
 * @lv 🟡
 * @link https://www.hackerrank.com/challenges/ctci-connected-cell-in-a-grid/problem?isFullScreen=true
 * @name DFS: Connected Cell in a Grid
 * @cate #recursion
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

// Complete the maxRegion function below.
function maxRegion(grid) {
    // 1. go through the matrix
    // 2. if 1, do explore, and update the max count
    if (!grid || grid.length < 1) return 0;

    const iBoundry = grid.length;
    const jBoundry = grid[0].length;
    const checkBoundry = (i, j) => {
        if (i < iBoundry &&
            i >= 0 &&
            j < jBoundry &&
            j >= 0
        ) return true;
        return false;
    }

    let max = Number.MIN_SAFE_INTEGER;
    let landSize = 0;
    const explore = (i, j) => {
        // left
        if (checkBoundry(i, j-1) && grid[i][j-1]) {
            grid[i][j-1] = undefined;
            landSize += 1;
            explore(i, j-1);
        }
        // right
        if (checkBoundry(i, j+1) && grid[i][j+1]) {
            grid[i][j+1] = undefined;
            landSize += 1;
            explore(i, j+1);
        }
        // up
        if (checkBoundry(i-1, j) && grid[i-1][j]) {
            grid[i-1][j] = undefined;
            landSize += 1;
            explore(i-1, j);
        }
        // down
        if (checkBoundry(i+1, j) && grid[i+1][j]) {
            grid[i+1][j] = undefined;
            landSize += 1;
            explore(i+1, j);
        }
        // left up
        if (checkBoundry(i-1, j-1) && grid[i-1][j-1]) {
            grid[i-1][j-1] = undefined;
            landSize += 1;
            explore(i-1, j-1);
        }
        // right up
        if (checkBoundry(i-1, j+1) && grid[i-1][j+1]) {
            grid[i-1][j+1] = undefined;
            landSize += 1;
            explore(i-1, j+1);
        }
        // left down
        if (checkBoundry(i+1, j-1) && grid[i+1][j-1]) {
            grid[i+1][j-1] = undefined;
            landSize += 1;
            explore(i+1, j-1);
        }
        // right down
        if (checkBoundry(i+1, j+1) && grid[i+1][j+1]) {
            grid[i+1][j+1] = undefined;
            landSize += 1;
            explore(i+1, j+1);
        }
    }

    for (let i = 0; i < iBoundry; i++) {
        for (let j = 0; j < jBoundry; j++) {
            if (grid[i][j] === undefined || grid[i][j] === 0) continue;
            grid[i][j] = undefined;
            landSize = 1;
            explore(i, j);
            if (landSize > max) max = landSize;
        }
    }

    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const m = parseInt(readLine(), 10);

    let grid = Array(n);

    for (let i = 0; i < n; i++) {
        grid[i] = readLine().split(' ').map(gridTemp => parseInt(gridTemp, 10));
    }

    const res = maxRegion(grid);

    ws.write(res + '\n');

    ws.end();
}
