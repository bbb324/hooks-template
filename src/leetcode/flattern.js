/**
 * Created by junxie on 20/5/25.
 */
/*
* 扁平化，按照层级扁平化
*
* */
Array.prototype.newFlat = function (n) {
  let arr = this;
  const flatten = (arr, num) => {
    if (num >= n) {
      return arr;
    }else {
      num = num + 1;
      return arr.reduce((pre, next) => {
        return pre.concat(Array.isArray(next) ? flatten(next, num) : next);
      }, [])
    }
  };
  return flatten(arr, 0);
}
const arr = [1, [2, 3], [4, [5, 6, [7, 8, 9]]]];
console.log(arr.newFlat(1));
console.log(arr.newFlat(2));