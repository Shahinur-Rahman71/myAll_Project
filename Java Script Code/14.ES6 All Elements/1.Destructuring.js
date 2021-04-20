
//destructuring array
const array = [1,2,3,6,6,55];
let [...a] = array; // ...a means a er value 1,2,3,6,6,55
let [z] = array;
console.log(z)

let [c,x,...y] = array;
console.log("a: "+a);
console.log(c,x,...y);

//destructuring object
const obj = {
    name: 'shanto',
    age: 24,
    email: 'shanto16026@gmail.com'
}
const {name,age,email} = obj;
console.log(age,name);

function print({name , email}) {
    console.log(`Name: ${name}; Email: ${email}`)
}

print({email,name})