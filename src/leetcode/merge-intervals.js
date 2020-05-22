/*
* https://leetcode-cn.com/problems/merge-intervals/solution/js-reduce-by-blzbanme/
*
* */
function f(arr) {
   let list = arr.sort((a, b) => a[0] - b[0]);
   let ar = [list[0]];
   for(let i = 1; i<list.length; i++) {
       let last = ar[ar.length - 1];

       let tmp = list[i];


       if(tmp[0] > last[1]) {
           ar.push(tmp);
       } else {
           if(tmp[0] <= last[1] && tmp[1] > last[1]) {
               last[1] = tmp[1]
           }
       }


   }
   console.log(ar)
   return ar;
}

/*
*         cur      tmp
*       [1, 2], [3, 4]
*
*       [1, 3], [2, 4]
*
*       [1, 4], [2, 3]
*       [1, 4], [4, 5]
*
*
*
* */

f([[1,4],[2,3]])

