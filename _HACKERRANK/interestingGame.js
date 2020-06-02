'use strict';
// https://www.hackerrank.com/challenges/an-interesting-game-1/problem?isFullScreen=true

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

// Complete the gamingArray function below.
function gamingArray(arr) {
    const solutionA = () => {
        let count = 0;
        while (arr.length > 0) {
            count += 1;
            let max = Number.MIN_SAFE_INTEGER;
            let maxIdx;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                    maxIdx = i;
                }
            }
            arr.splice(maxIdx);
        }
        const winner = (count % 2) === 0 ? 'ANDY' : 'BOB';
        return winner;
    }
    
    const solutionB = () => {
        const map = {};
        for(let i = 0; i < arr.length; i++) {
            map[arr[i]] = i;
        }
        
        const tempArr = [...arr];
        tempArr.sort((a, b) => (b - a));

        let count = 0;
        for(let j = 0; j < tempArr.length; j++) {
            const idx = map[tempArr[j]];
            if (arr[idx] !== undefined) {
                count += 1;
                arr.splice(idx);
            }
        }

        const winner = (count % 2) === 0 ? 'ANDY' : 'BOB';
        return winner;
    }

    return solutionB();
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const g = parseInt(readLine().trim(), 10);

    for (let gItr = 0; gItr < g; gItr++) {
        const arrCount = parseInt(readLine().trim(), 10);

        const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const result = gamingArray(arr);

        ws.write(result + '\n');
    }

    ws.end();
}
