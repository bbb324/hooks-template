// 大数相加

function aa(a, b) {
    let length = a.length > b.length ? a.length : b.length;

    let listA = a.split('').reverse();
    let listB = b.split('').reverse();


    let list = [];
    let inc = 0;
    for(let i = 0; i<length; i++) {

        if(listB[i] === undefined) {
            list[i] = +listA[i] + inc;
            inc = 0;
        } else {
            let cur = Number(listA[i]) + Number(listB[i]) + inc;
            if(cur >= 10) {
                inc = 1;
                cur = cur - 10;
            } else {
                inc = 0;
            }
            list[i] = cur;
        }
    }
    if(list[list.length - 1] > 10) {
        let cur = list[list.length - 1] - 10;
        list.push(1);
        list[list.length -1] = cur;
    }
    let sum = list.reverse().join('')
    return +sum;
}

aa('4059231231231380371', '3187989556787623531');
