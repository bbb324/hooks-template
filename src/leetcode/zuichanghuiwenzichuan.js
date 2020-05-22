/*
* 思路：
* 增加补充字符
*
*
* abcd ->  NaN a null b null c null d null NaN
*
*
* */
function f(s) {
    let res = '';
    for(let i = 0; i<s.length; i++) {
        let s1 = isParlin(s, i, i)
        let s2 = isParlin(s, i, i+1)
        res = s1.length > res.length ? s1 : res;
        res = s2.length > res.length ? s2 : res;
    }
    return res;

}

function isParlin(s, l, r) {
    while(s[l] === s[r] && l>= 0 && r<=s.length) {
        l--;
        r++;
    }
    return s.substr(l+1,  r - l - 1)
}
