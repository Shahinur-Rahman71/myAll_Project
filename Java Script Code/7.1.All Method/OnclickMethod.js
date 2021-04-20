function mybutton(){
    var x,text;
    x = document.getElementById("foronclick").value;

    if(isNaN(x) || x<1 || x>20){
        text=" This number is not valid.";
    } else{
        text="This number is  valid.";
    }
    document.getElementById("demo").innerHTML = text+" and input is : "+x;
}
//Create an object
var person = {
    fname : "shanto",
    lname : "islam",
    age : 23,
    fullname : function(){
        return this.fname+" "+this.lname;
    }
};
document.getElementById("method").innerHTML = person.fullname();



