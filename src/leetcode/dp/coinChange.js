    // 322. 零钱兑换

/*
 思路

 1. 明确状态转移方程
 f(x) = min(f[x-2]+1, f[x-5]+1, f[x-7]+1)

 转换成代码就是一个for循环
 f(x) = Math.min((arr[i] - coins[j])+1, arr[i])

 2. 初始条件，判断边界情况
 arr[0] = 0, 求最小值的时候，先初始化 arr[i] = Number.MAX_VALUE;

 3. 升序计算
 arr[0], arr[1], arr[2], arr[3]

 */

/*
* 为什么迭代从1开始 ？？ 因为0块钱需要0枚硬币
* 首先定义拼不出为正无穷，因为题目要求"如果没有任何一种硬币组合能组成总金额，返回 -1。"
*
* */

// amount = Math.min(f(x) + coin[j]) + amount

function cg(coins, sum) {
    let res = [];
    res[0] = 0;
    for(let i = 1; i<= sum; i++) {
        res[i] = Number.MAX_VALUE;
        for(let j = 0; j<coins.length; j++) {
            if(i >= coins[j]) {
                res[i] = Math.min(res[i], res[i-coins[j]]+1)
            }
        }
    }
}



cg([1, 2, 5], 11)
