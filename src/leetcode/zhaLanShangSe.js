/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) {
    let count = 0;
    let res = [];
    res[0] = k;
    res[1] = k*k;
    for(let i = 2; i<n; i++) {
        res[i] = res[i-1] *(k-1) + res[i-2] * (k-1)
    }
    return res[i]
};
numWays(3, 2)
