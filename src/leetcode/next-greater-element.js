/*
*
* 没做出来
* */
function f(n) {
    let k = n.toString();
    let kList = k.split('')
    kList = kList.reverse();
    let knum = kList.join('')
    if(isNaN(knum)) {
       return -1;
    } else {
        if(knum >n) {
            return knum;
        } else {
            return -1
        }
    }
}

f(12)
