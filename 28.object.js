const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 143;
a[['object Object']] = 143;
a[c] = 286;
a[['object Object']] = 286;

console.log(a[b]);
// Answer: 286
console.log(a[b] == a[c]);
// True
console.log(b.toString());
// ['object Object']