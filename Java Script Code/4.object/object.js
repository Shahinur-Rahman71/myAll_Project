
// var student = {   //this is object.Student is object name//

//     name: "Shanto islam",
//     age: 22,
//     cgpa: 3.33,
//     language: ["Bangla","English","Hindi"]
// }

function student(name,age,cgpa,language) {  
    //this is constructor

    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    this.language=language;

    this.display = function() {  //this is function inside the constructor//
        
        document.write(this.name+"<br/>",this.age+"<br/>",
        this.cgpa+"<br/>",this.language+"<br/><br/><br/>");
    }

}

var student1 = new student("Shanto islam ...",22,3.33,["Bangla","English","Hindi"]);
var student2 = new student("Rafiq islam ...",23,3.43,["Bangla","English","Hindi"]);
var student3 = new student("Jobbar islam ...",24,3.53,["Bangla","English","Hindi"]);
var student4 = new student("Hadayt islam ...",25,3.63,["Bangla","English","Hindi"]);

student1.display();
student2.display();
student3.display();
student4.display();
