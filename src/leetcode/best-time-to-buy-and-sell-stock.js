/*
*  记录当前最小值 curMin
*  记录当前最大差值 max
*
* */

function f(list) {
    let sum = 0;
    let curMin = list[0];

    for(let i = 0; i< list.length; i++) {
        curMin = Math.min(list[i], curMin);
        sum = Math.max(list[i] - curMin, sum)
    }
    return sum;
}

f([7,1,5,3,6,4])



function f(list) {
    let cur = list[0];
    let res = 0;
    for(let i = 1; i< list.length; i++) {
        cur = Math.min(cur, list[i])
        res = Math.max(res, list[i] - cur);
    }
}
