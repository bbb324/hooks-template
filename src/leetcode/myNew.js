let arr = [5,[3,2,[1],3],5];


function flater(arr) {
    let res = [];
    re(arr)

    function re(arr) {
        if(!Array.isArray(arr)) {
            return
        }
        for(let i = 0; i< arr.length; i++) {
            if(Array.isArray(arr[i])) {
                re([...arr[i]])
            } else {
                res.push(arr[i])
            }
        }
    }
    console.log(res);
    console.log(res.length)
}

//flater(arr)


/*
*  new 的实现
*  1. 创建新对象
*  2. 获取原对象的构造函数
*  3. 原型绑到新对象的原型链上
*  4. 通过apply实现属性继承
*
* */
function myNew() {
   let obj = {};
   let constructor = [].shift.apply(arguments);
   obj.__proto__ = constructor.prototype;
   let res = constructor.apply(obj, arguments);
   return typeof res === 'object' ? res : obj;
}

function testMyNew(name) {
    this.name = name;
}

function Otaku (name, age) {
    this.strength = 60;
    this.age = age;

    return 'handsome boy';
}

//a = myNew(Otaku, 'wang', 33)



/*
* call 的实现
* 1. 增加fn函数，this赋值给fn
* 2. 执行fn,参数为args
* 3. 删除fn函数
* */



Function.prototype.myCall = function(obj,...args){
    obj = obj ? obj : window;
    obj.fn = this;
    obj.fn(...args);
    delete obj.fn
};

Function.prototype.myApply = function(obj, arr) {

    obj = obj ? obj : window;
    obj.fn = this;
    let res;

    let args = [];


    delete obj.fn;


};



a = {
    age: 12,
    getAge: function() {
        console.log(this.name)
    }
};
b = { age: 13, name: 15};
a.getAge.call(b)  // 13



