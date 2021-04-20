function reverseString(name){
    //console.log(name.split('').reverse())
    var result=name.split('').reverse().join('');
    return result;
}

var str="I love bangladesh";

console.log(reverseString(str));

// Unlimited Argument Passing

function unlimited(n,m,...name){
     console.log(name.length);
     console.log(name);
}
unlimited(1,2,3);
unlimited(1,2,3,4,5,6);
unlimited(1,2,3,6);

// Another Example are given below:
console.log("\nstudent adding : \n");
function addStudent(storage,...people){

    for(var i=0;i<people.length;i++){

        storage.push(people[i]);
    }
     
}

var student=[];
addStudent(student,"Shanto","Runa","Laila","Jorina");
console.log(student);
addStudent(student,"Shanta","Rupa");
console.log(student);
addStudent(student,"Shanto islam","Runa khan","Laila begum");
console.log(student);