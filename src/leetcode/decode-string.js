// https://leetcode-cn.com/problems/decode-string/

/*
* 思路
*
* 通过正则的办法取出  1[ab]  10[abc] 这样的各式，然后用'$'特殊符号代替
*
* 然后遍历正则得出的序列，填充到$
*
*
* */
function f(str) {
    if(str.length === 0) return '';
    let res = '';
    re(str);

    function re(val) {

        if(val.indexOf('[') === -1) {
            res += val;
            return;
        }

        let list = val.match(/((\d+)\[\w+\])/g);
        let tmp = val.replace(/((\d+)\[\w+\])/g, '$');
        list.forEach(item => {
            let cur = getStr(item);

            tmp = tmp.replace('$', cur);
        });
        re(tmp);
    }

    return res;
}

function getStr(list) {
    let num = list.match(/(\d+)/g)[0];
    let tmp1 = list.replace(/\d+\[/, '');
    let tmp2 = tmp1.replace(']', '');
    let newStr = '';
    while(num >0) {
        newStr += tmp2;
        num--;
    }
    return newStr;
}


//f('3[a]2[bc]')  //aaabcbc
//f('3[a2[c]]') // accaccacc
f("3[a]2[b4[F]c]") // abcabccdcdcdef
