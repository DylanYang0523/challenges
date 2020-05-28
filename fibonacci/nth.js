/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    // recursion without memoize
    const fibRecursionA = (x) => {
        if (x === 0) return 0;
        if (x === 1) return 1;
        const result = fibRecursionA(x-1) + fibRecursionA(x-2);
        return result;
    }
    
    // recursion with memoize
    const memo = [0, 1];
    const fibRecursionB = (x) => {
        if (memo[x] !== undefined) return memo[x];
        const result = fibRecursionB(x-1) + fibRecursionB(x-2);
        memo[x] = result;
        return result;
    }
    
    // iteration
    const fibIteration = (x) => {
        const fibArr = [0, 1];
        if (fibArr[x] !== undefined) return fibArr[x]; 
        for(let i = 2; i <= x; i++) {
            fibArr[i] = fibArr[i-1] + fibArr[i-2];
        }
        return fibArr[x];
    }
    
    return fibIteration(N);
};

const ans = fib(40);
console.log('ans:', ans);