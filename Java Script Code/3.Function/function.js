
function name(number,number1) {
    var output = number + number1;
    return output;
    
}

for(var i=0; i<10;i++){
    document.write("Final output is : "+name(i,i+1)+"<br/>");
    
}

findArray(5);

function findArray(Arraylength){

    var firstarray =new Array(Arraylength);

    for(var i=0;i<5;i++){
        firstarray[i]=prompt("Enter the name : ");
    }
    // firstarray[0]="Shanto";
    // firstarray[1]="Rafiq";
    // firstarray[2]="Jobbar";
    // firstarray[3]="Alamin";
    // firstarray[4]="Shafique";

    //var x=firstarray.length;
    //document.write(x);
    document.write("<br/>");
    for(var i=0;i<firstarray.length;i++){

        document.write("Array output: "+firstarray[i]+"<br/>");
    }
}

var hi=["s","sd","dslk"];
var ha=["ss","sds","dslkss"];
hi.push("sokina");//hi array te akta element add hobe.
ha.pop();//ha array te last element delete hoiya jabe.

var con=hi.concat(ha);
document.write(con);

