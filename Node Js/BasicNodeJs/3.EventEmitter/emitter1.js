const eventEmitter = require('events');

// class emitterClass extends eventEmitter{}

// const myEvent = new emitterClass();
// let m= 0;
// myEvent.on('event',(err,data)=>{
//     console.log(data,++m);
//     if(err){
//         console.log(err);
//     }
    
// });

// myEvent.emit('event','Hi, I am shanto');
// myEvent.emit('event',new Error('whoops! error occur'));

const myEvent = new eventEmitter();

myEvent.on('event',function first(){
    console.log('Helloooo! first listener');
});
myEvent.on('event',function second(arg1,arg2){
    console.log(`second listener value ${arg1} and ${arg2}`);
});
myEvent.on('event',third =(...arg)=>{
    const value = arg.join(', ');
    console.log(`third listener value ${value}`);
})

console.log(myEvent.listeners('event'));

myEvent.emit('event',1,2,3,4,5,0,6,7,8);

