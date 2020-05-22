function deepclone(obj) {
    let newObj = {};

    Object.keys(obj).forEach(item => {
        if(Array.isArray(obj[item])) {
            newObj[item] = new Array(...obj[item])
        } else {
            if(typeof obj[item] === 'object' || typeof obj[item] === 'function') {
                newObj[item] = deepclone(obj[item])
            } else {
                newObj[item] = obj[item]
            }
        }

    })
    return newObj;
}


let obj = {
    a: 1,
    b: 2,
    c: {
        a: 1,
        b: [1,2,3]
    }
}

//console.log(deepclone(obj))



function cc(list) {
    let arr = new Map();
    list.forEach(item => {
        if(arr.get(item) === undefined) {
            arr.set(item, 1)
        } else {
            let count = arr.get(item);
            count++;
            arr.set(item, count)
        }
    })

    let tmp = [...arr];
    // [ab,4] [c,2]  [abd, 1]
    let newArr = [];
    tmp.forEach(item => {
        if(item[1] === 1) {
  newArr.push(item[0])
} else {
    for(let i = 1; i<= item[1]; i++) {
        newArr.push(`${item[0]}${i}`)
    }
}
})
console.log(newArr)
}

cc(['ab', 'c', 'ab', 'abd', 'c', 'ab', 'ab', 'd'] )
