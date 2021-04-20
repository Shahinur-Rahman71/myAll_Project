var day=30;
var row=5;
var start=7;
var week="Sun    Mon    Tues   Wed    Ther   Fri    Sat";

console.log("\nCalender of May, 2018 \n");
console.log(week+"\n");
var daycalculate="";
for(var i=0;i<row;i++){

    for(var j=1;j<=7;j++){

            var calculate = i*7+j;
            if(calculate>day){
                break;
            }
            if(calculate<start){
                daycalculate+="       ";
            }
            else if(calculate<=9){
                calculate=calculate-start+1;
                daycalculate+=calculate+"      ";
            }
            else{
                daycalculate+=calculate+"     ";
            }
    }
    daycalculate+="\n";
    
}
console.log(daycalculate);