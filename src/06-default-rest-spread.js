function f(x, y=12, z=2*y) {
    console.log(x,y,z);
}
f(1,2,3); // 1 2 3
f(5,8); // 5 8 16
f(4); // 4 12 24


function g(x, ...y) {
    console.log(y);
}
g(3, "hello", true); // ["hello", true]


function h(x, y, z) {
    console.log(x + y + z);
}
h(...[1,2,3]); // 6