
const fs = require('fs');

const readFile =()=>{
    try {
       return JSON.parse(fs.readFileSync('groceryList.json'));
    } catch(err){
        return [];
    }
}
const writeFile =(groceryList)=>{
    try {
        fs.writeFileSync('groceryList.json',JSON.stringify(groceryList));
    } catch(err){
        console.log(err);
    }
}

const add = (item, price)=>{
    //  let groceryList = [];
     let groceryList = readFile();

    // try {
    //     groceryList = JSON.parse(fs.readFileSync('groceryList.json'));
    // } catch(err){
    //     // console.log(err)
    // }

    let index = groceryList.findIndex((x)=> x.item === item);
    
    if(index === -1){// which means i can't find this.
        groceryList.push({item, price});
        // console.log(groceryList)
    }else{
        groceryList[index].price += price;
    }

    // fs.writeFileSync('groceryList.json',JSON.stringify(groceryList));
    writeFile(groceryList);
}

const remove = (item)=>{

    // let groceryList = [];
    let groceryList = readFile();

    // try {
    //     groceryList = JSON.parse(fs.readFileSync('groceryList.json'));
    // } catch(err){
    //     // console.log(err)
    // }

    const filteredList = groceryList.filter((x)=> x.item !== item);
    // fs.writeFileSync('groceryList.json',JSON.stringify(filteredList));
    writeFile(filteredList);
}

const print = ()=>{

    // let groceryList = [];
    let groceryList = readFile();

    // try {
    //     groceryList = JSON.parse(fs.readFileSync('groceryList.json'));
    // } catch(err){
    //     // console.log(err)
    // }

    console.log(groceryList);
}

const priceOf = (item)=>{

    // let groceryList = [];
    let groceryList = readFile();

    // try {
    //     groceryList = JSON.parse(fs.readFileSync('groceryList.json'));
    // } catch(err){
    //     // console.log(err)
    // }

    let index = groceryList.findIndex((x)=> x.item === item);
    if(index !== -1){
        console.log(`price of ${item} is ${groceryList[index].price}`);
    }
}


module.exports={
    add,
    remove,
    print,
    priceOf
}

//node app add --item=rice --price=50