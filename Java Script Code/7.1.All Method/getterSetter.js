var student = {
    name : "Shahinur Rahman Shanto",
    id : 26,
    district : "Rajshahi",
    get result(){
        return student.name+" "+this.district;
    }
};

// Display data from object using getter method
document.getElementById("getter").innerHTML = student.result;

// For setter method
var people = {
    name : "Hider Ali",
    age : 34,
    language : "Bangla",
    set lang(value) {
        this.language = value.toUpperCase();
    }
};

// set the value using setter method
people.lang = "English";
document.getElementById("setter").innerHTML=people.language;
