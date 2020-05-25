/**
 * Created by junxie on 20/5/25.
 */

/*
*  有序数组去重
*
* */

function f(list) {
  let slow = 0;
  let fast = 1;
  while(fast < list.length - 1) {
    if(list[slow] === list[fast]) {
      fast++;
    } else {
      slow++;
      list[slow] = list[fast];
      fast++;
    }
  }

  console.log(list.splice(0, slow+1));
  return list.splice(0, slow+1);
}

var a = [1,2,2,2,2,2,3,3,4,4];

f(a);