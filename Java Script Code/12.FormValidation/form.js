function validateForm(){

    var name        = document.myform.name;
    var email       = document.myform.email;
    var telephone   = document.myform.telephone;
    var checkbox    = document.myform.checkbox;
    var select      = document.myform.select;
    var comment     = document.myform.comment;

    if(name.value == ""){
        document.getElementById("messageshow") .innerHTML="Please enter the valid name.";
        return false;
    }
    if(email.value == ""){
        document.getElementById("messageshow") .innerHTML="Please enter the valid Email.";
        return false;
    }
    if(email.value.indexOf("@", 0)<0 || email.value.indexOf(".", 0)<0){
        document.getElementById("messageshow") .innerHTML="Please enter the valid email address.";
        return false;
    }
    if(telephone.value == "" && checkbox.checked == false){
        document.getElementById("messageshow") .innerHTML="Please enter the telephone number.";
        return false;
    }
    if(select.selectedIndex<1){
        document.getElementById("messageshow") .innerHTML="Please tell us how we can help you.";
        return false;
    }
    if(comment.value == ""){
        document.getElementById("messageshow") .innerHTML="Please put the comment.";
        return false;
    }

}
function enabledisable(check){
    if(check.checked){
        document.myform.telephone.disabled = true;
    }else{
        document.myform.telephone.disabled = false;
    }
}
// function emailvalidation(){

//     var getEmail=document.getElementById("eid");
//     var email=getEmail.value;
//     //document.write(email);

//     var Emailregex=/([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})/;
//     getEmail.style.color="white";
//     if(Emailregex.test(email)){
//          getEmail.style.backgroundColor="green";
//     }else{
//          getEmail.style.backgroundColor="red";
//     }         
    
// }