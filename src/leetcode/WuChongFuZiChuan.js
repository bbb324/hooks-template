/*
*   https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
*   无重复子串，
*   核心是明确start开始位置
*
*
* */

function aa(s) {
    let start = 0;
    let cur = '';
    let maxLength = '';
    for(let i = 0; i<s.length; i++) {
        if(cur.indexOf(s[i]) >= 0) {
            start += s.slice(start, i).indexOf(s[i])+1;
        }
        cur = s.slice(start, i+1);
        maxLength = Math.max(maxLength, cur.length)
    }
    return maxLength;

}

aa('pwwkew')
