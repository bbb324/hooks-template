// https://leetcode-cn.com/problems/jump-game/

/*
* 思路
*       1. 边界问题
*
*       2. 转移方程
*       当前 arr[i] 值小于等于arr[i-1]
*
*
* */

function bb(list) {
    if(list.length === 0) return false;

    let arr = [];
    arr[0] = true;

    for(let j = 1; j < list.length; j++) {
        arr[j] = false;
        for(let i = 0; i < j; i++) {

            if((i + list[i]) >= j) {

                arr[j] = true;
            }
        }
    }


    console.log(arr.every(i => i === true));

    return arr.every(i => i === true);

}


//let obj = [2,3,1,1,4];
let obj = [3,2,1,0,4];
//obj = [2, 0, 2]
bb(obj);



































/*
function aa(list) {
    if(list.length === 0) return false;
    if(list.length === 1) return true;

    let arr = [];
    arr[0] = true;


    for(let j = 1; j<list.length; j++) {
        arr[j] = false;
        for(let i=0; i< j; i++) {
            if(arr[i] && (i + list[i]) >= j) {
                arr[j] = true;
                break;
            }
        }
    }
    console.log(arr)
    console.log(arr.every(i => i === true))
    return arr.every(i => i === true)
}

let obj = [2,3,1,1,4];
//let obj = [3,2,1,0,4];
//obj = [2, 0]
aa(obj)
*/
