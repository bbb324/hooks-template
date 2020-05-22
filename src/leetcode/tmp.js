let obj = [
    {id: 3, parent: 2},
    {id: 1, parent: null},
    {id: 2, parent: 1},
    {id: 5, parent: 4},
    {id: 6, parent: 3},
    {id: 9, parent: 5},
    {id: 10, parent: 8},
]

f(obj)
function f(arr) {
    let newList = [];
    arr.forEach(item => {
        if(item.parent === null) {
            newList.push(item)
        }
    });

    let count = 0;
    while(20) {
        let cur = arr[count];
        console.log(cur)
        newList.forEach(item => {
            if(item.id === cur.parent) {
                item.children = item.children ? item.children.concat(cur) : [cur]
                arr = arr.splice(count, 1);
                count = 0;
            }
        });

    }
    console.log(newList)
}
