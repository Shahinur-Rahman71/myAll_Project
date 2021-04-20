const question = ['what is your name?', 'how old are you?'];
const answer = [];

const readline = require('readline');
const r1 = readline.createInterface(process.stdin,process.stdout);

r1.question(question[0], result=>{

    answer.push(result);
    if (answer.length < question.length) {
        r1.setPrompt(question[answer.length]);//another question korte parbo
         r1.prompt(); // prompt use korar fole question 1 execution ses hobe.
        r1.on('line', data=>{ // jokhon enter dibo tokhon line event kaj korbe.
            if(data.trim().toLowerCase() === 'exit'){
                r1.close();
                return;
            }
            r1.setPrompt("What else you say? Write exit to leave.");
             r1.prompt();
            answer.push(data);
        });
    }
    
    // console.log(result);
});

// for output
r1.on('close',()=>{
    console.log(`you are typing : ${answer}`);
})