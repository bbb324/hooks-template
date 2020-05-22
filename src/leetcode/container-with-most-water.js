//https://leetcode-cn.com/problems/container-with-most-water/
/*
* 盛水最多容器
* 通过指针
* */

function f(height) {
    let start = 0;
    let end = height.length-1;
    let max = 0;

    while(start < end) {
        let volumn = (end - start) * Math.min(height[start], height[end]);

        max = Math.max(max, volumn);
        if(height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
    }
    console.log(start, end)
    console.log(max)
    return max;
}

var a = [1,8,6,2,5,4,8,3,7];
f(a)
