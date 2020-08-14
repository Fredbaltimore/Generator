let cssCode = document.getElementById("display-css");
let colorOne = document.querySelector(".colorOne");
let colorTwo = document.querySelector(".colorTwo");
let body = document.getElementById("gradient");
let button = document.getElementById("copyButton");
let emptyDiv = document.getElementById("empty");


function setGradient(){
    body.style.background = "linear-gradient(to right, " 
    + colorOne.value + ", " + colorTwo.value +")";
    cssCode.textContent = body.style.background + ";";   
}

function copyCode(){
    let copyCSScode = document.getElementById("display-css");
    copyCSScode.select();
    document.execCommand("copy");
}

function emptyTextBox(){
    console.log("v");
    return cssCode.value.length;
}

function displayCopyMessage(){
    if (emptyTextBox() > 0){
        let msg = document.createElement("p");
        msg.innerHTML = "Your CSS code has been copied to the clipboard";
        msg.style.color = "white";
        emptyDiv.appendChild(msg);
        
    } else if (emptyTextBox() === 0) {
        let msg = document.createElement("p");
        msg.innerHTML = "No Css to copy";
        msg.style.color = "white";
        emptyDiv.appendChild(msg);
    }
}

colorOne.addEventListener("input", setGradient);
colorTwo.addEventListener("input", setGradient);