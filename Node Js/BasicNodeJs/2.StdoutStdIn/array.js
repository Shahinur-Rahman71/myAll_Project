const question = ['what is your name?', 'how old are you?'];
const answer = [];

process.stdout.write(question[0]);

process.stdin.on('data', method => {

    answer.push(method.toString().trim());
    if (answer.length < question.length) {
        process.stdout.write(question[answer.length]);
    } else {       
        process.exit();
    }
    
});

process.on('exit',()=>{
    for (const x of answer) {
        process.stdout.write(x + '\n');
    }
})


