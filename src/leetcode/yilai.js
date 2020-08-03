/*
* 依赖
* */
var obj = [
    {id: 3, parent: 2},
    {id: 1, parent: null},
    {id: 2, parent: 1},
    {id: 5, parent: 4},
    {id: 6, parent: 3},
    {id: 9, parent: 5},
    {id: 10, parent: 8}
];

function toObjectTree(obj) {
    let list = [];
    for(let i = 0; i<obj.length; i++) {
        let cur = obj[i];


        let res = obj.filter(j => cur.parent === j.id);
        if(res.length === 0) {
            list.push(cur);
        } else {
            res[0].child = cur;
        }
    }
    return list;
}

toObjectTree(obj)
