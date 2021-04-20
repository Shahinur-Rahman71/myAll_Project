const name = 'shanto';
const email= 'sdjfldkj';

// General method
const obj = {
    name : name,
    email: email,
    print: function(){
        console.log(name,email);
    }
}
obj.print();

// ES6 Method
const obj1 ={
    name, // ai name ar variable name same hole ai vabe likha jabe.
    email,
    print1(){
        console.log(name,email);
    }
}
obj1.print1();
console.dir(obj1);