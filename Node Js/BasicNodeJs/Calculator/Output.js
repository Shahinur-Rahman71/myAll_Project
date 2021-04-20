const out = require('./firstCalculator');
const yargs = require('yargs');

// const action = process.argv[2];
const action = yargs.argv._[0];
console.log('App Started !! ');
console.log(yargs.argv)
console.log('Action : ',action);

const a = yargs.argv.a;
const b = yargs.argv.b;

if(action === 'sum'){
    console.log('Total sum : '+out.sums(a,b));

}else if(action === 'sub'){
    console.log('Total sub : '+out.sub(a,b));

}else if(action === 'mult'){
    console.log('Total mult : '+out.mult(a,b));

}else if(action === 'div'){
    console.log('Total div : '+out.div(a,b));

}

// input: node Output.js sum --a=2 --b=3 

