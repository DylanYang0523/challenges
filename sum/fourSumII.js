/**
 * https://leetcode.com/problems/4sum-ii/
 * 454. 4Sum II
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    const solutionA = () => {
        const sort = (arr) => {
            arr.sort((a, b) => (a - b));
        }

        // sort(A);
        // sort(B);
        sort(C);
        sort(D);

        const findDiff = (arr, idx, direction) => {
            let goal = idx + direction;
            while (arr[goal] !== undefined &&
                   arr[goal] === arr[idx]) {
                goal += direction;
            }
            return goal;
        }

        const EXPECT = 0;
        const mapA = {};
        let count = 0;
        for (let i = 0; i < A.length; i++) {
            if (mapA[A[i]] !== undefined) {
                count += mapA[A[i]];
                continue;
            }
            const oriA = count;
            const sum3 = EXPECT - A[i];
            const mapB = {};
            for (let j = 0; j < B.length; j++) {
                if (mapB[B[j]] !== undefined) {
                    count += mapB[B[j]];
                    continue;
                }
                const oriB = count;
                const sum2 = sum3 - B[j];
                let pointerC = 0;
                let pointerD = D.length - 1;
                while (pointerC < C.length && pointerD >= 0) {
                    const sum = C[pointerC] + D[pointerD];
                    if (sum === sum2) {
                        const nextC = findDiff(C, pointerC, 1);
                        const nextD = findDiff(D, pointerD, -1);
                        const distanceC = nextC - pointerC;
                        const distanceD = pointerD - nextD;
                        count += (distanceC * distanceD);
                        pointerC = nextC;
                        pointerD = nextD;
                    } else if (sum < sum2) {
                        pointerC = findDiff(C, pointerC, 1);
                    } else {
                        pointerD = findDiff(D, pointerD, -1);
                    }
                }
                mapB[B[j]] = count - oriB;
            }
            mapA[A[i]] = count - oriA;
        }

        return count;
    }
    
    const solutionB = () => {
        const sort = (arr) => {
            arr.sort((a, b) => (a - b));
        }

        sort(C);
        sort(D);
        
        // Map is way faster than object.
        // const mapAB = {};
        const mapAB = new Map();
        for (let i = 0; i < A.length; i++) {
            for (let j = 0; j < B.length; j++) {
                const sumAB = A[i] + B[j];
                const target = mapAB.get(sumAB);
                if (target === undefined) {
                    mapAB.set(sumAB, 1);
                } else {
                    mapAB.set(sumAB, target + 1);
                }
            }
        }

        let count = 0;
        for (let i = 0; i < C.length; i++) {
            for (let j = 0; j < D.length; j++) {
                const sumCD = C[i] + D[j];
                const target = mapAB.get(-sumCD);
                if (target) {
                    count += target;
                }
            }
        }

        return count;
    }
    
    return solutionB();
};