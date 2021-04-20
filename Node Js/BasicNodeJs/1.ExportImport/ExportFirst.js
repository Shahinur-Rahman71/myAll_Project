const first = 'Welcome';
module.exports.firsts = 'Welcome';
// exports.firsts = 'Welcome';

const firstFunction =(name)=>{
    console.log("hi "+name);
}
// module.exports.firstFunction=firstFunction;
module.exports ={
    firstFunction,
    first
}
//above method are used to export any items.
//Here module.exports is the better way