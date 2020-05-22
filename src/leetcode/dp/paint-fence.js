/*https://leetcode-cn.com/problems/paint-fence/
function f(n, k) {
    let res = [];
    res[0] = 0;
    res[1] = k;
    res[2] = k*k;



    for(let i = 3; i<=n; i++) {


        res[i] = res[i-1]*(k-1) + res[i - 2]*(k-1);

    }
    return res[n];
}
*/


function f(list) {
    let newList = [];
    list.forEach(item => {
        if(item % 2 === 0) {
            newList.unshift(item)
        } else {
            newList.push(item)
        }
    })
    console.log(newList)
}

f([3,2,1,4])
