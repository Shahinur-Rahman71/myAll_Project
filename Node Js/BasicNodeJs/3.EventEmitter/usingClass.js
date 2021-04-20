const EventEmitter = require('events').EventEmitter;

class info extends EventEmitter{
    constructor(name){
        super();
        this.name = name;
    }
    getting(){
        this.on('event',data=>{
            console.log(`${data} ${this.name}`);
        });
    }
}

const myEvents = new info('Shahninur Rahman');
myEvents.getting();
myEvents.emit('event','Hi');