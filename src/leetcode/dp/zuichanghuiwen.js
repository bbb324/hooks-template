function f(str) {
    let res = '';
    let str1, str2;
    for(let i = 0; i<str.length; i++) {
        str1 = isPoli(str, i, i);
        str2 = isPoli(str, i, i+1);
        res = str1.length > res.length ? str1 : res;
        res = str2.length > res.length ? str2 : res;
    }
    return res;
}

function isPoli(str, l, r) {
    while(l >= 0 && r <= str.length && str[l] === str[r]) {
        l--;
        r++;
    }
    return str.substr(l+1, r - l - 1);
}


f('babad')
