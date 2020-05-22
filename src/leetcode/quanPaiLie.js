/*
 *   最简单的递归调用，自己想的复杂了
 *   就是查询list，如果当前值不存在于changedList，则继续添加，直到changedList长度等于list则添加到res当中
 *
 * */

function f(arr) {
    let res = [];

    re([]);
    function re(tmp) {
        if(tmp.length === arr.length) {
            res.push(tmp);
            return;
        }
        for(let i = 0; i<arr.length; i++) {
            if(tmp.indexOf(arr[i]) < 0) {
                re([...tmp, arr[i]])
            }
        }
    }
    return res;
}

f(['a','b','c']);
