/**
 * @lv 🟡
 * @link https://www.hackerrank.com/challenges/bfsshortreach/copy-from/163267505?isFullScreen=true
 * @name Breadth First Search: Shortest Reach
 * @cate #graph, #queue
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

// Complete the bfs function below.
function bfs(n, m, edges, s) {
    const weight = 6;
    const queue = [s];
    const ans = Array(n + 1).fill(undefined);
    let level = 0;
    while (queue.length !== 0) {
        level += 1;
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const curr = queue.shift();
            for (let j = 0; j < edges.length; j++) {
                // undirected case1
                if (edges[j][0] === curr) {
                    if (ans[edges[j][1]] === undefined) {
                        queue.push(edges[j][1]);
                        ans[edges[j][1]] = weight * level;
                    }
                }
                // undirected case2
                if (edges[j][1] === curr) {
                    if (ans[edges[j][0]] === undefined) {
                        queue.push(edges[j][0]);
                        ans[edges[j][0]] = weight * level;
                    }
                }
            }
        }
    }

    const finalAns = [];
    for (let i = 1; i < ans.length; i++) {
        if (i === s) continue;
        if (ans[i] === undefined) {
            finalAns.push(-1);
            continue;
        }
        finalAns.push(ans[i]);
    }

    return finalAns;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const nm = readLine().split(' ');

        const n = parseInt(nm[0], 10);

        const m = parseInt(nm[1], 10);

        let edges = Array(m);

        for (let i = 0; i < m; i++) {
            edges[i] = readLine().split(' ').map(edgesTemp => parseInt(edgesTemp, 10));
        }

        const s = parseInt(readLine(), 10);

        let result = bfs(n, m, edges, s);

        ws.write(result.join(" ") + "\n");
    }

    ws.end();
}
