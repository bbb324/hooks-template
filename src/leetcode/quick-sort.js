/**
 * Created by Administrator on 2020/5/25.
 */
// ¿ìËÙÅÅĞò
function sort(arr) {
    let left = [];
    let right = [];
    let len = arr.length;
    if(len <= 1) return arr;


    let index = Math.floor(len/2);

    let pivot = arr.splice(index, 1);
    len -= 1;


    for(let i =0; i<len; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return sort(left).concat(pivot, sort(right))
}

sort([4,2,1,3,5,6,7,4,9,7,5,2,2])