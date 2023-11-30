const input = document.getElementById("contact-name");

input.addEventListener("focusin", borderFocusIn);
input.addEventListener("focusout", borderFocusOut);

function borderFocusIn(borderColorA) {
    borderColorA = input;
    borderColorA.style.borderBottomColor = 'rgb(54, 83, 107)';           
}

function borderFocusOut(borderColorB) {
    borderColorB = input;
    if (borderColorB.value == 0) {
        borderColorB.style.borderBottomColor = "rgb(159, 173, 184)";   
    }
}

//input.addEventListener("input", errorMessage)

/*
function errorMessage(error){
    error = input;
        if(error.value==0){
        var focus = document.activeElement;
        focus.style.borderBottomColor = 'rgb(255, 0, 0)';   
        focus.style.placeholdercolor = 'rgb(255, 0, 0)'; 
    }

}
*/