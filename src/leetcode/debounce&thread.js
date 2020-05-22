(function () {
    /*document.querySelector('#app').onclick = debounce(() => {
        console.log(123)
    }, 1000)*/
    document.querySelector('#app').onclick = thread(() => {
        console.log(123)
    }, 1000)
})()

function debounce(fn, delay) {
    let timeout;
    return function() {
        let self = this;
        let args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(self, args);
        }, delay)
    }
}

function thread(fn, delay) {
    let now = +new Date();
    return function() {
        let self = this;
        let args =arguments;
        let last = +new Date();
        if(last - now >= delay) {
            now = last;
            fn.apply(self, args)
        }
    }
}

function myNew() {
    let obj = {};
    let constructor = [].shift.call(arguments);
    obj.__proto__ = constructor.prototype;
    let ret = constructor.call(obj, arguments);
    return typeof ret === 'object' ? ret : obj;
}


function deepcopy(obj) {
    let tmpObj = {};
    Object.keys(obj).forEach(item => {
        if(Array.isArray(obj[item])) {
            tmpObj[item] = [...obj[item]]
        } else {
            if(typeof obj[item] === 'object') {
                deepcopy(obj[item])
            } else {
                tmpObj[item] = obj[item]
            }
        }
    })
    return tmpObj
}

Promise.all = function(list) {
    let result = [];
    return new Promise((resolve, reject) => {
        for(let i in list) {
            list[i].then(res => {
                result[i] = res;
            })
        }
    })
}




var foo = {
    value: 1
}

function bar(name, age) {
    console.log(this.value)
    console.log(name, age)
}

var a = bar.bind(foo, 'daisy')
a(33)

Function.prototype.myBind = function(ctx) {
    let args = [].slice.call(arguments, 1);
    let self = this;
    return function() {
        let args2 = [].slice.call(arguments);
        return self.apply(ctx, args.concat(args2))
    }
}


promise.all = function(list) {
    let res = [];
    return new Promise((resolve, reject) => {
        for(let i in list) {
            list[i].then(res => {
                res[i] = res;
            })
        }
        resolve(res)
    })
}


class Event {
    constructor() {
        this.events = {};
    }
    on(event, fn) {
        this.events[event].push(fn)
    }
    removeListener(event, fn) {
        this.events[event] = this.events[event].filter(fn => fn )
    }
    emit(event) {
        this.events[event].map(fn => fn())
    }
}




function myInstance(left, right) {
    let leftProto = left.__proto__;
    let rightProto = right.prototype;
    while(true) {
        if(leftProto === null) {
            return null;
        }
        if(leftProto === rightProto) {
            return true;
        }
        leftProto = leftProto.__proto__
    }
}

myInstance([1,2,3], Array)



