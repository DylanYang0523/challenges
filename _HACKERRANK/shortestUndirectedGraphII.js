// https://www.hackerrank.com/challenges/ctci-bfs-shortest-reach/problem?isFullScreen=true

function processData(input) {
    //Enter your code here
    const inputArr = input.split('\n');
    const q = Number(inputArr.shift());
    const cases = [];
    let caseNum = 0;
    while (inputArr.length !== 0) {
        const curr = inputArr.shift();
        const currArr = curr.split(' ');
        const nodeNum = Number(currArr[0]);
        const len = Number(currArr[1]) + 1;
        
        cases[caseNum] = {};
        cases[caseNum].nodes = nodeNum;
        const edges = [];
        for (let i = 0; i < len; i++) {
            const target = inputArr.shift();
            if (i === len - 1) {
                cases[caseNum].start = Number(target);
                continue;
            }
            const tArr = target.split(' ');
            edges.push(tArr.map(t => Number(t)));
        }
        cases[caseNum].edges = edges;
        caseNum += 1;
    }
    
    // nodes(number), edges(metrix[][number]), start(number)
    const findAns = (nodes, edges, start) => {
        const arr = Array(nodes + 1).fill(undefined);
        const queue = [start];
        const weight = 6;
        let level = 0;
        while (queue.length !== 0) {
            level += 1;
            const qLen = queue.length;
            for (let i = 0; i < qLen; i++) {
                const curr = queue.shift();
                for (let j = 0; j < edges.length; j++) {
                    if (edges[j][0] === curr) {
                        if (arr[edges[j][1]] === undefined) {
                            arr[edges[j][1]] = weight * level;
                            queue.push(edges[j][1]);
                        }
                    }
                    if (edges[j][1] === curr) {
                        if (arr[edges[j][0]] === undefined) {
                            arr[edges[j][0]] = weight * level;
                            queue.push(edges[j][0]);
                        }
                    }
                }
            }
        }

        const final = [];
        for (let i = 1; i < arr.length; i++) {
            if (i === start) continue;
            if (arr[i] === undefined) {
                final.push(-1);
            } else {
                final.push(arr[i]);
            }
        }

        return final;
    }

    const ans = [];
    for (let i = 0; i < cases.length; i++) {
        const curr = cases[i];
        ans.push(findAns(curr.nodes, curr.edges, curr.start));
    }

    let ansStr = '';
    for (let i = 0; i < ans.length; i++) {
        const tmp = ans[i].join(' ');
        ansStr += tmp;
        if (i !== ans.length - 1) ansStr += ' \n';
    }

    console.log(ansStr);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
