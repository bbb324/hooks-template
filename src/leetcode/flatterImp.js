var arr = [5,[3,2,[1],3],5];

function flatter(arr) {
   let res = [];
   re(arr);

   function re(list) {
        for(let i = 0; i<list.length; i++) {
            if(Array.isArray(list[i])) {
                re(list[i])
            } else {
                res.push(list[i]);
            }
        }
   }
   return res;
}

a = flatter(arr)
console.log(a)
