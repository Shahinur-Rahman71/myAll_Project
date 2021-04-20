// for(var i=0;i<3;i++){
//     document.querySelectorAll(".Button")[i].addEventListener("click",function(){
//     var text=this.innerHTML;
//     // console.log(text);
//     // document.write(text);
//     audiofunction(text);
//     playanimation(text);
   
//     });
// }

// document.addEventListener("keypress",function(event){
//     var res=event.key;
//     var text=res.toUpperCase(); // a,b,c press korle audio play + annimation add hobe.
//     audiofunction(text);
//     playanimation(text);

// });

// document.addEventListener("keypress",function(event){
//     var get=event.key;
//     document.querySelector("b").innerHTML="You press "+get;// For b tag
// });
var count=0;
document.querySelector("textarea").addEventListener("keypress",function(event){
    count++;
    var get=event.key;
    document.querySelector("b").innerHTML="You press "+count;// For textarea tag
});


// function audiofunction(res){

//     switch(res){
//         case 'A':
//             var audio=new Audio("Music/a.mp3");
//             audio.play();
//             break;

//             case 'B':
//             var audio=new Audio("Music/b.mp3");
//             audio.play();
//             break;

//             case 'C':
//             var audio=new Audio("Music/c.mp3");
//             audio.play();
//             break;
//     }
// }
// function playanimation(res){
//     var sel=document.querySelector("."+res);
//     sel.classList.add("amimation");

//     setTimeout(function(){
//         sel.classList.remove("amimation");
//     },1000);
// }

