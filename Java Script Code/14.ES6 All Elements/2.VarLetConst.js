
// var is functional scope
var x = 10;

if(true) {
    var x = 20;
    console.log(x);
}
console.log(x); // x er man aser kotha silo 10 . ans hobe 20. x 20 dara replace hoise.this is the problem

// let is blocked scope
let y = 20;
if(true){
    let y = 10;
    console.log(y);// blocked scope // output: 10
}
console.log(y); // output: 20

// const is constant. its value we can't changed.
const z = 2;
if(true) {
     z = 3;
}
console.log(z); // error occured