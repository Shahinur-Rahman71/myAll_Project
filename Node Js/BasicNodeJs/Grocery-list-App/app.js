const commands = require('./commands');
const yargs = require('yargs');

console.log(yargs.argv);
const command = yargs.argv._[0];
const item =yargs.argv.item;
const price = yargs.argv.price;

if(command === 'add'){

    if( item && price){
        commands.add(item,price);
    }

}else if(command === 'print'){

    commands.print();
    
}else if(command === 'remove'){

    if(item){
        commands.remove(item);
    }

}else if(command === 'priceOf'){

    if(item){
        commands.priceOf(item);

    }
    
}else{
    console.log('ok, This doesnt make any sense')
}

