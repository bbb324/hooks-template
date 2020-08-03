// 16进制转10进制
function hex2int(hex) {
  var len = hex.length, a = new Array(len), code;
  for (var i = 0; i < len; i++) {
    code = hex.charCodeAt(i);
    if (48<=code && code < 58) {
      code -= 48;
    } else {
      code = (code & 0xdf) - 65 + 10;
    }
    a[i] = code;
  }

  return a.reduce(function(acc, c) {
    acc = 16 * acc + c;
    return acc;
  }, 0);
}

hex2int()

//aa('aeb2e1d')



FYuGaEtyS