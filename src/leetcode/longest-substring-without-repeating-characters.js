let str = "bbtablud"
function f(s) {
    if(s.length === 0) return 0;
    let tmpStr = '';
    let left = 0;
    let maxLength = 0;
    for(let i = 0; i<s.length; i++) {
        if(tmpStr.indexOf(s[i]) !== -1) {
            left += tmpStr.slice(left, i).indexOf(s[i])+1;
            continue;
        }
        /*if(tmpStr.indexOf(s[i]) !== -1) {
            left += s.slice(left, i).indexOf(s[i])+1;
            continue;
        }*/
        tmpStr = s.slice(left, i+1);
        maxLength = Math.max(maxLength, tmpStr.length)
    }
    console.log(maxLength)
    return maxLength
}

f(str);
