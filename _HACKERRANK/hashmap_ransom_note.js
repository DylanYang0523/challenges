/**
 * @lv 🟢
 * @link https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
 * @name Hash Tables: Ransom Note
 * @cate #hashmap
 */
"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
  const map = {};
  let ans = false;
  for (let i = 0; i < magazine.length; i++) {
    if (!map[magazine[i]]) {
      map[magazine[i]] = 1;
      continue;
    }
    map[magazine[i]] += 1;
  }
  for (let i = 0; i < note.length; i++) {
    if (map[note[i]] > 0) {
      map[note[i]] -= 1;
      if (i === note.length - 1) ans = true;
      continue;
    }
    break;
  }
  console.log(ans ? "Yes" : "No");
}

function main() {
  const mn = readLine().split(" ");

  const m = parseInt(mn[0], 10);

  const n = parseInt(mn[1], 10);

  const magazine = readLine().split(" ");

  const note = readLine().split(" ");

  checkMagazine(magazine, note);
}
