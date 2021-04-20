
//general method
const obj1 = {
    name: 'shanto',
    print: function(){

        setTimeout(function(){
            console.log(this.name);
        }.bind(this),1000);

    }
}
obj1.print();

// ES6 method
const obj2 = {
    name: 'Hyder ali',
    omago(){
        setTimeout(()=>{
            console.log(this.name);
        },1000)
    }
}
obj2.omago();
