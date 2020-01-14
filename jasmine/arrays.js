let ar = [2, 4, 5, 6, 9, 0812]
console.log(ar);
let myAr = Array(1, 2, 100, 3434, 35, 4);
console.log(myAr);
// myAr.fill(1, 1, 3)
// console.log(myAr);
myAr.push(200, 20)
myAr.pop()
myAr.shift()
myAr.unshift(0, 1)
console.log(myAr.includes(30));
console.log(myAr.indexOf(6));


console.log(myAr);
console.log(myAr.sort());
let a = [9, 7, 6, 8, 6]
let set = new Set(a)
console.log(a);

let b = a.reduce((a, b) => {
    return a + b
}, 0)
let len = a.length
for (let i = 0; i < len; i++) {
    console.log(a[i]);

}
console.log(b);


console.log(a);

console.log(myAr);








