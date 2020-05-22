/**
 * @param {string} s
 * @return {boolean}
 *
 * 思路：维护一个list，然后压栈出栈的方式判断当前括号类型，是否在数组中存在相反的
 */
var isValid = (s) => {
    if(s.length === 0) return true;
    if(s.length % 2 === 1) return false;
    let stack = [];
    stack[0] = s[0]
    for(let i = 1; i < s.length; i++) {
        let verse = getVerse(s[i]);
        if(stack.indexOf(verse) >= 0) {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }
    return stack.length === 0
}

function getVerse(str) {
    if(str === '(') return ')';
    if(str === ')') return '(';
    if(str === '[') return ']';
    if(str === ']') return '[';
    if(str === '{') return '}';
    if(str === '}') return '{';
}
