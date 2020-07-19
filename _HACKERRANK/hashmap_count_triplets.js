/**
 * @lv 🔴
 * @link https://www.hackerrank.com/challenges/count-triplets-1/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
 * @name Count Triplets
 * @cate #hashmap, #editor_pick
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

// Complete the countTriplets function below.
function countTriplets(arr, r) {
  const solutionA = () => {
    // err: position problem
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
      const t = map.get(arr[i]);
      if (t) {
        map.set(arr[i], t + 1);
      } else {
        map.set(arr[i], 1);
      }
    }
    const layerMap = {};
    let count = 0;
    if (r === 1) {
      for (let [k, v] of map) {
        if (v < 3) continue;
        const layer = v - 3 + 1;
        const layerNum = layerMap[layer];
        if (layerNum) {
          count += layermap;
        } else {
          let tempLayerNum = 0;
          for (let i = layer; i > 0; i--) {
            for (let j = 1; j <= i; j++) {
              tempLayerNum += j;
            }
          }
          layerMap[layer] = tempLayerNum;
          count += tempLayerNum;
        }
      }
    } else {
      for (let [k, v] of map) {
        const a = v;
        const b = map.get(k * r) || 0;
        const c = map.get(k * r * r) || 0;
        count += a * b * c;
      }
    }
    return count;
  };
  const solutionB = () => {
    let totalCount = 0;
    const possibilities = {};
    const combos = {};
    arr.forEach((number) => {
      totalCount += combos[number] || 0;
      const nextNumber = number * r;
      combos[nextNumber] =
        (combos[nextNumber] || 0) + (possibilities[number] || 0);
      possibilities[nextNumber] = (possibilities[nextNumber] || 0) + 1;
    });
    return totalCount;
  };

  const solutionC = () => {
    let count = 0;
    const t1 = {};
    const t2 = {};
    for (let i = 0; i < arr.length; i++) {
      const curr = arr[i];
      if (t2[curr]) count += t2[curr];

      const next = curr * r;
      if (t1[curr]) {
        t2[next] = t2[next] ? t2[next] + t1[curr] : t1[curr];
      }

      t1[next] = t1[next] ? t1[next] + 1 : 1;
    }
    return count;
  };

  return solutionC();
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nr = readLine().replace(/\s+$/g, "").split(" ");

  const n = parseInt(nr[0], 10);

  const r = parseInt(nr[1], 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const ans = countTriplets(arr, r);

  ws.write(ans + "\n");

  ws.end();
}
