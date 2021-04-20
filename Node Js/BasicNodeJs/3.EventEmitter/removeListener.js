const eventListener = require('events');

const myevent = new eventListener();

const callbackA = ()=>{
    console.log('A');

    myevent.removeListener('event',callbackB);
}

const callbackB =()=>{
    console.log('B')
}

myevent.on('event',callbackA);
myevent.on('event',callbackB);

myevent.emit('event');//output: A B
myevent.emit('event');//output: A