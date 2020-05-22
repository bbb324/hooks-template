let n = 3;
function f(n) {
    let res = [];
    re([], 0, 0)
    function re(tmp, l, r) {
        if(l === n || r === n) {
            res.push(tmp);
            return;
        }
        if(l >= r) {
            re([...tmp, '('], l+1, r)
            re([...tmp, ')'], l, r+1)
        }
        if(l < r) {
            re([...tmp, '('], l+1, r)
        }
    }
}
