/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.max = capacity;
    this.hashMap = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
   if(this.hashMap.has(key)) {
       let val = this.hashMap.get(key);
       this.hashMap.delete(key);
       this.hashMap.set(key, val)
       return val;
   }
   return -1;

};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    this.hashMap.set(key, value);
    if(this.hashMap.size > this.max) {
        this.hashMap.delete(this.hashMap.keys().next().value)
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
var cache = new LRUCache( 2 /* 缓存容量 */ );

/*
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
*/




var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.cache.has(key)) {
        var val = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, val);
        return val;
    }

    else
        return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.cache.size < this.capacity && !this.cache.has(key)) {
        this.cache.set(key, value);
    } else if(this.cache.has(key)) {
        this.cache.delete(key);
        this.cache.set(key, value);
    } else if (this.cache.size = this.capacity) {
        // Map.prototype.keys() 返回一个迭代对象，而不是数组
        // 迭代对象 Iterator.next() 是迭代对象的第一个对象，而不是值，需要 .value获取值
        this.cache.delete(this.cache.keys().next().value);
        this.cache.set(key, value);
    }
};
