function f(n1, n2) {
    let l1 = getBinary(n1)
    let l2 = getBinary(n2);
    console.log(l1, l2)
    let min = Math.max(l1.length, l2.length);
    let newList = [];
    let inc = 0;
    for(let i = 0; i<= min; i++) {
        if(l1[i] === 1 && l2[i] === 1) {
            inc = 1;
            newList[i] = 0;
        }
    }
    if(inc === 1) {
        newList.push(1)
    }
    console.log(newList)
}

function getBinary(num) {
    let list = [];
    while(num>= 1) {
        list.push(num%2);
        num=Math.floor(num/2);
    }
    return list;
}

f(4, 5)
