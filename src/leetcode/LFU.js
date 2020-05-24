/**
 * Created by Administrator on 2020/5/25.
 */
/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
    this.record = {};
    this.capacity = capacity;
    this.numMap = {};
    this.stack = [];
    this.reOrder = function(key) {
        let i = this.stack.indexOf(key);
        while (this.numMap[this.stack[i]] >= this.numMap[this.stack[i - 1]]) {
            [this.stack[i], this.stack[i - 1]] = [this.stack[i - 1], this.stack[i]];
            i--;
        }
    }
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    if (this.record[key] === undefined) return -1;
    this.numMap[key]++;
    this.reOrder(key);
    return this.record[key];
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    if (!this.capacity) return;
    if (this.record[key] !== undefined) this.numMap[key]++;
    else {
        if (this.stack.length >= this.capacity) {
            let lowFrequencestKey = this.stack.pop();
            delete this.record[lowFrequencestKey];
            delete this.numMap[lowFrequencestKey];
        }
        this.stack.push(key);
        this.numMap[key] = 1;
    }
    this.reOrder(key);
    this.record[key] = value;
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */