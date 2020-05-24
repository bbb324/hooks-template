var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.cache.has(key)) {
        var val = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, val);
        return val;
    } else
        return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    /* if (this.cache.size < this.capacity && !this.cache.has(key)) {
         this.cache.set(key, value);
     } else if (this.cache.has(key)) {
         this.cache.delete(key);
         this.cache.set(key, value);
     } else if (this.cache.size = this.capacity) {
         // Map.prototype.keys() 返回一个迭代对象，而不是数组
         // 迭代对象 Iterator.next() 是迭代对象的第一个对象，而不是值，需要 .value获取值
         this.cache.delete(this.cache.keys().next().value);
         this.cache.set(key, value);
     }*/


    if (this.cache.size < this.max && !this.cache.has(key)) {
        this.cache.set(key, value);
    } else if(this.cache.has(key)) {
        this.cache.delete(key);
        this.cache.set(key, value);
    } else {
        this.cache.delete(this.cache.keys().next().value);
        this.cache.set(key, value);
    }
};

