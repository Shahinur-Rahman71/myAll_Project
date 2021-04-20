
//javascript er akta building object jeta use kore asynchronous kaj gulo kora jai.

let myFirstPromise = new Promise((resolve,reject)=>{
    let name = 'Shahinur Rahman';

    setTimeout(() => resolve(name),1000)
    
})
//console.log(myFirstPromise);

myFirstPromise
    .then((name)=>{
        //It will be executed if here can't find any error.
        console.log("My name is "+name);
    })
    .catch(err => {

    })

/////////////////// this code can't run from this file.
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response)=>{
//         console.log(response.json());
//     })
//     .then((body)=>{

//         const lis = body.map(data=>{
//             let li =document.createElement('li');
//             let text =`Name : ${data.name}, Email : ${data.email}`;
//             let textNode = document.createTextNode(text);

//             li.appendChild(textNode);
//             return li;
//         });

//         lis.forEach((li)=>{
//             document.getElementById('mylist').appendChild.li
//         })
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
    
