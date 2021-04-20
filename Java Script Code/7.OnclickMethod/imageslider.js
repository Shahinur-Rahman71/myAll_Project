
var slider = document.querySelector("img");

var array = ["Images/shanto.jpg","Images/shanto1.jpg","Images/child.jpg"];

var count = 0;


function next(){
        count++;

        if(count >= array.length)
        {
            count = 0;
            slider.src = array[count];

        } else {
            slider.src = array[count];
        }  
         
}


 function pre() {
        count--; 
        
        if(count < 0) {
            count = array.length-1; //2
            slider.src = array[count];

        } else {
            slider.src = array[count];
        }
     
}
    
