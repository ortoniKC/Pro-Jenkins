function a() {
    for (var i = 0; i < 4; i++) {
        console.log(i);
    }
    console.log(`outside loop but with in fun ${i}`)
}
a()
console.log(i);



// () => {
//     console.log("im in Anonymous ");
// }
// function add() {
//     // some thing to do
// }
// function add(a, b, c) {
//     // some thing to do
// }
let a = () => {
    // console.log(num1 * num2);
    return num1 * num2
}
// let a = 10;
console.log(a())

