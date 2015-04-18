var [a, , b, c=4] = [1,2,3];
console.log(a,b,c); // 1 3 4

var {w,x,y,z:surprise} = {x:"this", y:"is", z:"amazing"}
console.log(w,x,y,surprise); // undefined 'this' 'is' 'amazing'

var getPerson = () => { return {name: "Kuba", company:"ABB"} };

var {name: myName} = getPerson();
console.log(myName); // Kuba

function g({name: x, surname}) {
    console.log(x, surname);
}
g({name: "Tom", surname: "Jones"}); // Tom Jones
