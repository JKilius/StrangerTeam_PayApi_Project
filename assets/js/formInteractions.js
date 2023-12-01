/* Name text box*/

const inputName = document.getElementById("contact-name");
const error = document.getElementById('inputErrorName');

inputName.addEventListener("focusin", borderFocusInName);
inputName.addEventListener("focusout", borderFocusOutName);

function borderFocusInName(borderColorA) {
    borderColorA = inputName;
    borderColorA.style.borderBottomColor = 'rgb(54, 83, 107)';          
}

function borderFocusOutName(borderColorB) {
    borderColorB = inputName;
        borderColorB.style.borderBottomColor = "rgb(159, 173, 184)";   
        inputName.classList.remove('inputErrorName');
        error.classList.add('hidden');
        inputName.style.removeProperty('--color')
    if (borderColorB.value == '' || borderColorB.value == ' '){ 
    inputName.classList.add('inputErrorName');
    error.classList.remove('hidden');
    inputName.style.borderBottomColor = 'rgba(248,157,157,255)';
    inputName.style.setProperty('--color', 'red')
    }  
}

/* Email text box*/

const inputEmail = document.getElementById("contact-email");
const errorEmail = document.getElementById('inputErrorEmail');

inputEmail.addEventListener("focusin", borderFocusInEmail);
inputEmail.addEventListener("focusout", borderFocusOutEmail);

function borderFocusInEmail(borderColorA) {
    borderColorA = inputEmail;
    borderColorA.style.borderBottomColor = 'rgb(54, 83, 107)';          
}

function borderFocusOutEmail(borderColorB) {
    borderColorB = inputEmail;
        borderColorB.style.borderBottomColor = "rgb(159, 173, 184)";   
        inputEmail.classList.remove('inputErrorEmail');
        errorEmail.classList.add('hidden');
        inputEmail.style.removeProperty('--color')
    if (borderColorB.value == '' || borderColorB.value == ' '){ 
    inputEmail.classList.add('inputErrorEmail');
    errorEmail.classList.remove('hidden');
    inputEmail.style.borderBottomColor = 'rgba(248,157,157,255)';
    inputEmail.style.setProperty('--color', 'red')
    }  
}

/* Company text box*/

const inputCompany = document.getElementById("contact-company-name");
const errorCompany = document.getElementById('inputErrorCompany');

inputCompany.addEventListener("focusin", borderFocusInCompany);
inputCompany.addEventListener("focusout", borderFocusOutCompany);

function borderFocusInCompany(borderColorA) {
    borderColorA = inputCompany;
    borderColorA.style.borderBottomColor = 'rgb(54, 83, 107)';          
}

function borderFocusOutCompany(borderColorB) {
    borderColorB = inputCompany;
        borderColorB.style.borderBottomColor = "rgb(159, 173, 184)";   
        inputCompany.classList.remove('inputErrorCompany');
        errorCompany.classList.add('hidden');
        inputCompany.style.removeProperty('--color')
    if (borderColorB.value == '' || borderColorB.value == ' '){ 
    inputCompany.classList.add('inputErrorCompany');
    errorCompany.classList.remove('hidden');
    inputCompany.style.borderBottomColor = 'rgba(248,157,157,255)';
    inputCompany.style.setProperty('--color', 'red')
    }  
}

/* Title text box*/

const inputTitle = document.getElementById("contact-title");
const errorTitle = document.getElementById('inputErrorTitle');

inputTitle.addEventListener("focusin", borderFocusInTitle);
inputTitle.addEventListener("focusout", borderFocusOutTitle);

function borderFocusInTitle(borderColorA) {
    borderColorA = inputTitle;
    borderColorA.style.borderBottomColor = 'rgb(54, 83, 107)';          
}

function borderFocusOutTitle(borderColorB) {
    borderColorB = inputTitle;
        borderColorB.style.borderBottomColor = "rgb(159, 173, 184)";   
        inputTitle.classList.remove('inputErrorTitle');
        errorTitle.classList.add('hidden');
        inputTitle.style.removeProperty('--color')
    if (borderColorB.value == '' || borderColorB.value == ' '){ 
    inputTitle.classList.add('inputErrorTitle');
    errorTitle.classList.remove('hidden');
    inputTitle.style.borderBottomColor = 'rgba(248,157,157,255)';
    inputTitle.style.setProperty('--color', 'red')
    }  
}

/* Message text box*/

const inputMessage = document.getElementById("contact-message");
const errorMessage = document.getElementById('inputErrorMessage');

inputMessage.addEventListener("focusin", borderFocusInMessage);
inputMessage.addEventListener("focusout", borderFocusOutMessage);

function borderFocusInMessage(borderColorA) {
    borderColorA = inputMessage;
    borderColorA.style.borderBottomColor = 'rgb(54, 83, 107)';          
}

function borderFocusOutMessage(borderColorB) {
    borderColorB = inputMessage;
        borderColorB.style.borderBottomColor = "rgb(159, 173, 184)";   
        inputMessage.classList.remove('inputErrorMessage');
        errorMessage.classList.add('hidden');
        inputMessage.style.removeProperty('--color')
    if (borderColorB.value == '' || borderColorB.value == ' '){ 
    inputMessage.classList.add('inputErrorMessage');
    errorMessage.classList.remove('hidden');
    inputMessage.style.borderBottomColor = 'rgba(248,157,157,255)';
    inputMessage.style.setProperty('--color', 'red')
    }  
}

/* Removes "Please fill out this field" box */

document.addEventListener('invalid', (function () {
    return function (popup) {
        popup.preventDefault();
       // document.getElementById("contact-name");
    };
})
(), true);