/**
 * @lv 🟡
 * @link https://www.hackerrank.com/challenges/frequency-queries/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
 * @name Frequency Queries
 * @cate #hashmap
 */
"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the freqQuery function below.
function freqQuery(queries) {
  const mapA = {};
  const mapB = {};
  const ans = [];
  const adjustMapB = (ori, latest) => {
    if (ori && mapB[ori]) mapB[ori] -= 1;
    if (latest) mapB[latest] = (mapB[latest] || 0) + 1;
  };
  const insertIntoMapA = (x) => {
    const ori = mapA[x];
    const latest = (ori || 0) + 1;
    mapA[x] = latest;
    adjustMapB(ori, latest);
  };
  const deleteFromMapA = (x) => {
    const ori = mapA[x];
    const latest = (ori || 1) - 1;
    mapA[x] = latest;
    adjustMapB(ori, latest);
  };
  const checkFromMapB = (x) => {
    return mapB[x] ? 1 : 0;
  };
  const pushToAns = (x) => {
    ans.push(x);
  };
  const actionDetect = (item) => {
    switch (item[0]) {
      case 1: {
        insertIntoMapA(item[1]);
        break;
      }
      case 2: {
        deleteFromMapA(item[1]);
        break;
      }
      case 3: {
        const result = checkFromMapB(item[1]);
        pushToAns(result);
        break;
      }
      default:
        break;
    }
  };
  queries.forEach(actionDetect);
  return ans;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine().trim(), 10);

  let queries = Array(q);

  for (let i = 0; i < q; i++) {
    queries[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((queriesTemp) => parseInt(queriesTemp, 10));
  }

  const ans = freqQuery(queries);

  ws.write(ans.join("\n") + "\n");

  ws.end();
}
