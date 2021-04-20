// Rest Operator = Onak gulo variable ke akta array te rupantor kore.
 
function sum(...num){
    return num.reduce((a,b) => a+b);   
}

const res = sum(1,2,3,4,5);
console.log('sum: '+res);

// Spread Operator

// ekhane spread operator 2ta kaj korlo 1) array venge dilo  
// 2) ekta object k r ekta object er vitore copy kore 
var cot = [34,3,4,4,4];
var cots = [...cot,2,6,4,9]; // cot er sob value ...cot a copy hoilo and 2,6,4,9 add holo
console.log(cot);
console.log(cots);

var obj1 = {
    name: 'shanto',
    email: 'shanto16026@gmail.com'
}
var obj2 = {
    ...obj1,
    name: 'shahinur rahman',
    age: 24
}
console.log(obj1)
console.log(obj2);