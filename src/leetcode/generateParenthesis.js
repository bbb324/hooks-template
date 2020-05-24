/*
* 生成括号
* https://leetcode-cn.com/problems/generate-parentheses/solution/bbb324-by-qqqq-18/
*
* */

function generateParenthesis(n) {
    let res = [];
    re([], 0, 0);

    function re(list, left, right) {
        if(left > n || right > n) return;
        if(left === n && right === n) {
            res.push(list.join(''));
        }
        if(left >= right) {
            re([...list, '('], left+1, right);
            re([...list, ')'], left, right+1);
        }
    }
    return res;
}
