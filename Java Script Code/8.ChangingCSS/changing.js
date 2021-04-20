
function addstyle() {
    var select = document.querySelector("#paraid");
    // select.style.color = "red";
    // select.style.fontSize = "3rem";//1 rem= 16px;
    // select.style.fontWeight = "bold";
    // select.style.fonStyle = "italic";
    select.classList.add("css-style");

}

function removestyle() {
    var select = document.querySelector("#paraid");
    select.classList.remove("css-style");

}