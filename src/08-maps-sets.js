var s = new Set();
s.add("hello").add("goodbye").add("hello");
console.log(s.size); // 2
console.log(s.has("hello")); // true

var key = {};
var m = new Map();
m.set(key, 42);
m.set(s, 34);
console.log(m.get(s)); // 34
console.log(m.get(key)); // 42
console.log(m.get({})); // undefined