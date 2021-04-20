
var selects = document.querySelector("h1");

selects.addEventListener("click",function(){
    alert("Congratulation!"); //this function is annonomous function
});

selects.addEventListener("mouseover",function(){
    selects.classList.add("heading");
});

selects.addEventListener("mouseout",myfunction);

function myfunction(){// this is function
    selects.classList.remove("heading");
}

             //for three button

// document.querySelectorAll(".myclass")[0].addEventListener("click",function(){

//     var get=this.innerHTML;// button er text get korbe.
//     document.querySelector("h2").innerHTML=get+" is clicked";

// });

// document.querySelectorAll(".myclass")[1].addEventListener("click",function(){

//     var get=this.innerHTML;
//     document.querySelector("h2").innerHTML=get+" is clicked";

// });

// document.querySelectorAll(".myclass")[2].addEventListener("click",function(){

//     var get=this.innerHTML;
//     document.querySelector("h2").innerHTML=get+" is clicked";

// });

var len = document.querySelectorAll(".myclass").length;
for(var i=0; i<len; i++){

    document.querySelectorAll(".myclass")[i].addEventListener("click",function(){

        var get=this.innerHTML;
        document.querySelector("h2").innerHTML=get+" is clicked";
    
    });
    
}
