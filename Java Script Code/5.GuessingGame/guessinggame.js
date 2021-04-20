
var won=0;
var lost=0;
for(var i=0;i<5;i++){

    var number= parseInt(prompt("Enter the guess between 1 to 5 : "));
    //var number= parseInt(prompt("Enter the number : "),10);
    var randomnum = Math.floor(Math.random()*5+1);
    
    if(number == randomnum){
        console.log("You have won!");
        won++;
    }
    else{
        console.log("You have lost :: Random number was "+randomnum);
        lost++;
    }

}

document.write("You have Won : "+won+" times<br/>");
document.write("You have Lost : "+lost+" times");

