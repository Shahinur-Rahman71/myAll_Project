
 var week=["Sat","Sun","Mon","Twe","Wed","Thu","Fri"];
//var week="Sat    &nbsp Sun  &nbsp Mun   &nbspTues    Wed    &nbspTher &nbspFri";
document.write("Calender of May, 2018 <br/><br/>");
for(var i=0;i<week.length;i++){
    document.write(week[i]+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
}
 
 document.write("<br/>");

// for(var i=0;i<29;i++){
    
//     if(i%7==0 && i!=0){
//          document.write("<br/>");//Calender of February, 2020
//        // console.log("");

//     }if(i<9){
//         document.write(i+1,"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
//     }else{
        
//         //console.log(space);
//         document.write(i+1,"&nbsp &nbsp &nbsp &nbsp&nbsp&nbsp");
          
//     }
// }

for(var i=0;i<4;i++){
    
    if(i<3){
        document.write("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
    }else{
        for(var j=3;j<34;j++){
            if(j%7==0){
                document.write("<br/>");
            }
            if(j<12){
                document.write(j-2,"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
            }else{
                
                document.write(j-2,"&nbsp &nbsp &nbsp &nbsp&nbsp&nbsp");
               
            }
        }
    }
    
}
