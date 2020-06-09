/**
 * https://leetcode.com/problems/course-schedule/submissions/
 * 207. Course Schedule
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const solutionA = () => {
        const arr = Array(numCourses).fill(true);
    
        const preMap = {};
        for (let i = 0; i < prerequisites.length; i++) {
            if (preMap[prerequisites[i][0]]) {
                preMap[prerequisites[i][0]].push(prerequisites[i][1]);
            } else {
                preMap[prerequisites[i][0]] = [prerequisites[i][1]];
            }
        }

        let isValid = true;
        const check = (list, invalidMap) => {
            for (let i = 0; i < list.length && isValid; i++) {
                const target = list[i];

                if (invalidMap[target]) {
                    isValid = false;
                    break;
                }

                arr[target] = false;

                const newMap = { ...invalidMap };
                newMap[target] = true;

                if (preMap[target]) {
                    check(preMap[target], { ...newMap });
                }
            }
        }

        for (let j = 0; j < arr.length && isValid; j++) {
            // tried
            if (!arr[j]) continue;
            arr[j] = false;

            const curMap = {};
            if (preMap[j]) {
                curMap[j] = true;
                check(preMap[j], curMap);
            }
        }

        return isValid;
    }
    
    // topological sort
    const solutionB = () => {
        const arr = Array(numCourses).fill(0);
        for (let i = 0; i < prerequisites.length; i++) {
            arr[prerequisites[i][0]] += 1;
        }
        
        const stack = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0) stack.push(i);
        }
        
        let count = 0;
        while (stack.length !== 0) {
            const curr = stack.pop();

            count += 1;
            for (let i = 0; i < prerequisites.length; i++) {
                if (prerequisites[i][1] === curr) {
                    arr[prerequisites[i][0]] -= 1;
                    if (arr[prerequisites[i][0]] === 0) stack.push(prerequisites[i][0]);
                }
            }
        }
        
        return count === numCourses;
    }
    
    return solutionB();
};