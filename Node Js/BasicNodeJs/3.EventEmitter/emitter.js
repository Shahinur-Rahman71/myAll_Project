const eventEmitter = require('events').EventEmitter;//events module
const myEvents = new eventEmitter();

function getting(){
    myEvents.on('greets', function(data){
        console.log(data);
    });
    console.log('Listening to event greet');
}

getting();
myEvents.emit('greets','I am shanto islam');// Here greets is event name.