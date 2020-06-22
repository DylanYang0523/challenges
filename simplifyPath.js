/**
 * https://leetcode.com/problems/simplify-path/submissions/
 * 71. Simplify Path
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    // clean slash
    let pathArr = path.split('');
    for (let i = pathArr.length - 1; i >= 0; i--) {
        if (pathArr[i] === '/' && i === pathArr.length - 1) {
            pathArr.splice(i, 1);
            continue;
        }
        if (pathArr[i] === '/' &&
            pathArr[i + 1] === '/') {
            pathArr.splice(i + 1, 1);
        }
    }
    
    path = pathArr.join('');
    pathArr = path.split('/');
    
    if (pathArr[0] === '') pathArr.shift();
    
    const final = [];
    for (let i = 0; i < pathArr.length; i++) {
        if (pathArr[i] === '.') continue;
        if (pathArr[i] === '..') {
            final.pop();
        } else {
            final.push(pathArr[i]);
        }
    }
    
    return '/' + final.join('/');
};