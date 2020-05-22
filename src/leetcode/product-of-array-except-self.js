// https://leetcode-cn.com/problems/product-of-array-except-self/

/*
*   通过角标key去区分添加，首先生成一个2维数组，然后计算每个2维数组乘积
*
* */

function f(list) {
   let newArray = [];
   list.forEach((item, key) => {
       newArray.push(list.filter((item, key2)=> key2 !== key));
   })
    let n2 = [];
   newArray.forEach((item, key) => {
       n2[key] = item.reduce((a, b) => a*b);
   })
    console.log(n2)
    return n2;
}



a = [1,2,3,4];
f(a)
