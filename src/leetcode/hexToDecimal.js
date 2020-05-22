// 16进制转10进制

function aa(str) {

    let table = {
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15,
    }
    var num = 0;
    var list = str.split('').reverse();
    for(let i = 0; i<list.length; i++) {
        if(isNaN(list[i])) {
            num += Math.pow(16, i) * Number(table[list[i]])
        } else {
            num += Math.pow(16, i) * Number(list[i])
        }
    }
    console.log(num)
}

function bb(num) {
    let str = '';
    let table = {
        10: 'A',
        11: 'B',
        12: 'C',
        13: 'D',
        14: 'E',
        15: 'F'
    };
    while(num > 0) {
        let char = Math.floor(num / 16);  //  / 是取余数  % 是取整除
        if(char >= 10) {
            str += table[char];
        } else {
            str += char;
        }
        num = num - char * 16;

    }

    console.log(str)
}
bb(171)

//aa('aeb2e1d')
