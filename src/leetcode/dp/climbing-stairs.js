// https://leetcode-cn.com/problems/climbing-stairs/

/*
* 思路：
*  1. 边界条件
*   arr[0] = 0;
*   arr[1] = 1;
*   arr[2] = 2;  一次爬一个台阶，爬两次。 一次爬两个台阶，爬一次
*
*  2. 状态方程
*  arr[n] = arr[n-1] + arr[n-2]
*
*  3. 升序计算
*  arr[1], arr[2]
*
*
* */


function aa(n) {
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;
    arr[2] = 2;

    for(let i = 3; i<=n; i++) {
        arr[i] = arr[i-1] + arr[i - 2];
    }

    return arr[n]
}


aa(10)
