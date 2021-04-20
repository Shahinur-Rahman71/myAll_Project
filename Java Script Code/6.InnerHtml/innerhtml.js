
var heads = document.getElementById("heading1");
heads.innerHTML="Hello";

document.getElementById("heading2").innerHTML="I Love Allah";
document.getElementsByTagName("p")[0].innerHTML="I am p tag";
document.getElementsByClassName("parbo")[0].innerHTML="ha' Insallah amie parbo";

document.querySelector("p").innerHTML="Eidted by queryselector";
document.querySelector("#heading2").innerHTML="I love allah edited by querySelector";
document.querySelector(".parbo").innerHTML="ha' Insallah amie parbo edited by querySelector";

//querySelector uppor er 3 ta method er kaj akshathe korbe.
document.querySelector("li a").innerHTML="School";
document.querySelector("div a").innerHTML="Mess";
