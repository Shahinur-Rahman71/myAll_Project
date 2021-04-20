console.log(process.argv);
const Legend =(keys)=>{
    const index = process.argv.indexOf(keys);
     return index !== -1 ? process.argv[index+1] : null;
}

const firstName= Legend('__firstName');
const lastName= Legend('__lastName');

if(!firstName || !lastName){
    console.log("Please provide correct information");
}else{
    console.log(`you are ${firstName} ${lastName}`);
}

