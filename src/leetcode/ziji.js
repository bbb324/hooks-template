/*
* 子集
*
* https://leetcode-cn.com/problems/subsets/submissions/
*
* */
var subsets = function(nums) {
    let res = [[]];
    for(let i=0;i<nums.length;i++){
        res.forEach(item => {
            res.push(item.concat(nums[i]));
        });
    }
    return res;
};

subsets(['a','b','c'])
