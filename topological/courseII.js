/**
 * https://leetcode.com/problems/course-schedule-ii/
 * 210. Course Schedule II
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const arr = Array(numCourses).fill(0);
    for (let i = 0; i < prerequisites.length; i++) {
        arr[prerequisites[i][0]] += 1;
    }
    
    const stack = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) stack.push(i);
    }
    
    const ans = [];
    while (stack.length !== 0) {
        const curr = stack.pop();
        ans.push(curr);
        for (let i = 0; i < prerequisites.length; i++) {
            if (prerequisites[i][1] === curr) {
                arr[prerequisites[i][0]] -= 1;
                if (arr[prerequisites[i][0]] === 0) stack.push(prerequisites[i][0]);
            }
        }
    }
    
    if (ans.length === numCourses) {
        return ans;
    }
    return [];
};