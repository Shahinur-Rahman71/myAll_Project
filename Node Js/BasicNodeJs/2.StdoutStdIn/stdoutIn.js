
process.stdout.write('Hello \n');
process.stdout.write('Word \n');

process.stdin.on('data',method=>{

    if(method.toString().trim().toLowerCase() === 'exit'){
        process.exit();
    }else{
        console.log(method.toString());
    }

});

process.on('exit',()=>{
    console.log("you are exiting your application");
})
