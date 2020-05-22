/*
* https://leetcode-cn.com/problems/maximum-subarray/submissions/
*   最常子序列和
*
*   思路：动态规划方案， num[i] vs res + num[i] 这两个最对比，取最大的
*
* */


function f(arr) {
    let cur = Number.MIN_VALUE;
    let res = arr[0];
    for(let i = 0; i<arr.length; i++) {
        cur = Math.max(arr[i], arr[i] + cur);
        res = Math.max(res, cur)
    }
    return cur;
}

f([-2,1,-3,4,-1,2,1,-5,4])
