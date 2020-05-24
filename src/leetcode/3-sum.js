/**
 * Created by Administrator on 2020/5/25.
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ans = [];
    nums = nums.sort((a, b) => a-b);
    for(let i = 0; i<nums.length; i++) {
        if(nums[i] > 0) break;
        if(i>0 && nums[i] === nums[i-1]) continue
        let L = i+1;
        let R = nums.length - 1;
        while(L<R) {
            let sum = nums[i]+nums[L]+nums[R];
            if(sum === 0) {
                ans.push([nums[i], nums[L], nums[R]]);
                while(L<R && nums[L] === nums[L+1]) L++;
                while(L<R && nums[R] === nums[R-1]) R--;
                L++;
                R--;
            }
            if(sum > 0) {
                R--;
            }
            if(sum<0) {
                L++
            }
        }
    }
    return ans;
};