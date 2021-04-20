console.log(process.argv);

process.stdout.write("shanto\n");

process.stdin.on("data", (method) => {
  console.log(method.toString());

  if(method.toString().trim()==='exit'){
      process.exit();
  }
});

process.on('exit',()=>{
    console.log('exit');
})