var TimeLimitedCache = function() {
    this.cache = new Map();
};
/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const exists = this.cache.has(key) && this.cache.get(key).expiresAt > Date.now();
    if (this.cache.has(key)) {
        clearTimeout(this.cache.get(key).timeoutId);
    }

    const timeoutId = setTimeout(() => {
        this.cache.delete(key);
    }, duration);

    this.cache.set(key, {
        value: value,
        expiresAt: Date.now() + duration,
        timeoutId: timeoutId
    });

    return exists;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const item = this.cache.get(key);
    if (item && item.expiresAt > Date.now()) {
        return item.value;
    }
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    let count = 0;
    const now = Date.now();

    for (const [key, item] of this.cache.entries()) {
        if (item.expiresAt > now) {
            count++;
        }
    }

    return count;
};

const timeLimitedCache = new TimeLimitedCache();

console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1

setTimeout(() => {
    console.log(timeLimitedCache.get(1)); // -1 (after expiration)
    console.log(timeLimitedCache.count()); // 0
}, 1500);