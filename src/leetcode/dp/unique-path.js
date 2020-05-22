// 322. unique-paths 机器人走格子

/*
    思路

    1. 边界情况
        arr[m][0] = 1;
        arr[0][n] = 1;
        如果只有一横排 则只有一种走法
        如果只有一竖排，则只有一种走法
    2. 状态方程
        f(x, y) = f(x-1, y) + f(x, y-1)

*/
function aa(m, n) {
    let arr = [];
    for(let i = 0; i<m; i++) {
        arr[i] = [];

        for(let j = 0; j < n; j++) {
            if(i === 0 || j === 0) {
                arr[i][j] = 1;
            } else {
                arr[i][j] = arr[i-1][j] + arr[i][j-1];
            }

        }
    }
    let key = arr[m-1][n-1];
    return key;
}


aa(7, 3);
