
function f(s) {
    let start = 0;
    let end = 1;
    if(s.length === 0) return 0;
    if(s.length === 1) return 1;
    let str = s[0];
    let max = 1;
    while(end <= s.length) {
        str = s.substring(start, end);
        max = Math.max(max, str.length);
        if(str.indexOf(s[end]) >= 0) {

            start = end;
            end = start + 1;
            str = s.substring(start, end)

        } else {
            end++;
        }
    }
    console.log(max)
    return max;
}

f('au')

