/*

https://leetcode-cn.com/problems/maximum-subarray/?utm_source=LCUS&utm_medium=ip_redirect_q_uns&utm_campaign=transfer2china

 归纳方程式： dp[i] = max(dp[i-1] + nums[i], nums[i])

 思路： 当前加的一定是大于 0 的，当前值等于前一个值加上当前元素和当前元素作对比，得出的最大值


 */

let obj = [-2,1,-3,4,-1,2,1,-5,4];

function f(nums) {
    let sum = 0;
    let res = nums[0];
    for(let i = 0; i< nums.length; i++) {
        sum = Math.max(nums[i] + sum, nums[i]);
        res = Math.max(sum, res);
    }
    return res;
}
f(obj);






