/**
 * @lv 🟢
 * @link https://www.hackerrank.com/challenges/caesar-cipher-1/problem?isFullScreen=false
 * @name Caesar Cipher
 * @cate #editor_pick
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

// Complete the caesarCipher function below.
function caesarCipher(s, k) {
    const alphabetArrLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const alphabetArrUpper = alphabetArrLower.map((alphabet) => alphabet.toUpperCase());
    const map = {};
    
    alphabetArrLower.forEach((alphabet, idx) => {
        let targetIdx = idx + k;
        if (targetIdx > 25) targetIdx %= 26;
        map[alphabet] = alphabetArrLower[targetIdx];
    });
    alphabetArrUpper.forEach((alphabet, idx) => {
        let targetIdx = idx + k;
        if (targetIdx > 25) targetIdx %= 26;
        map[alphabet] = alphabetArrUpper[targetIdx];
    });

    const sArr = s.split('');
    for(let i = 0; i < s.length; i++) {
        if (map[sArr[i]]) {
            sArr[i] = map[sArr[i]];
        }
    }

    return sArr.join('');
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    const k = parseInt(readLine(), 10);

    let result = caesarCipher(s, k);

    ws.write(result + "\n");

    ws.end();
}
