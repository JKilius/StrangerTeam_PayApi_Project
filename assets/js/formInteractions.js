/* Name text box*/

const inputName = document.getElementById("contact-name");
const error = document.getElementById('inputErrorName');

inputName.addEventListener("focusin", borderFocusInName);
inputName.addEventListener("focusout", borderFocusOutName);

function borderFocusInName(borderColorA) {
    borderColorA = inputName;
    borderColorA.style.borderBottomColor = 'rgb(54, 83, 107)';  
    badInputName.classList.add('hiddenError');     
    error.classList.add('hiddenError');
}

function borderFocusOutName(borderColorB) {
    borderColorB = inputName;
        borderColorB.style.borderBottomColor = "rgb(159, 173, 184)";   
        inputName.classList.remove('inputErrorName');
        error.classList.add('hiddenError');
        inputName.style.removeProperty('--color')
    if (borderColorB.value == '' || borderColorB.value == ' '){ 
    inputName.classList.add('inputErrorName');
    error.classList.remove('hiddenError');
    inputName.style.borderBottomColor = 'rgba(248,157,157,255)';
    inputName.style.setProperty('--color', 'red')
    }  
}

inputName.addEventListener("invalid", invalidInputName);
const badInputName = document.getElementById('inputErrorNameCheck');

function invalidInputName(check) {
    check = inputName;
    badInputName.classList.remove('hiddenError'); 
    check.style.borderBottomColor = 'rgba(248,157,157,255)';
    error.classList.add('hiddenError');
}

/* Email text box*/

const inputEmail = document.getElementById("contact-email");
const errorEmail = document.getElementById('inputErrorEmail');

inputEmail.addEventListener("focusin", borderFocusInEmail);
inputEmail.addEventListener("focusout", borderFocusOutEmail);

function borderFocusInEmail(borderColorA) {
    borderColorA = inputEmail;
    borderColorA.style.borderBottomColor = 'rgb(54, 83, 107)';  
    badInputEmail.classList.add('hiddenError');   
    errorEmail.classList.add('hiddenError');       
}

function borderFocusOutEmail(borderColorB) {
    borderColorB = inputEmail;
        borderColorB.style.borderBottomColor = "rgb(159, 173, 184)";   
        inputEmail.classList.remove('inputErrorEmail');
        errorEmail.classList.add('hiddenError');
        inputEmail.style.removeProperty('--color')
    if (borderColorB.value == '' || borderColorB.value == ' '){ 
    inputEmail.classList.add('inputErrorEmail');
    errorEmail.classList.remove('hiddenError');
    inputEmail.style.borderBottomColor = 'rgba(248,157,157,255)';
    inputEmail.style.setProperty('--color', 'red')
    }  
}

inputEmail.addEventListener("invalid", invalidInputEmail);
const badInputEmail = document.getElementById('inputErrorEmailCheck');

function invalidInputEmail(check) {
    check = inputEmail;
    badInputEmail.classList.remove('hiddenError'); 
    check.style.borderBottomColor = 'rgba(248,157,157,255)';
    errorEmail.classList.add('hiddenError');
}

/* Company text box*/

const inputCompany = document.getElementById("contact-company-name");
const errorCompany = document.getElementById('inputErrorCompany');

inputCompany.addEventListener("focusin", borderFocusInCompany);
inputCompany.addEventListener("focusout", borderFocusOutCompany);

function borderFocusInCompany(borderColorA) {
    borderColorA = inputCompany;
    borderColorA.style.borderBottomColor = 'rgb(54, 83, 107)';
    badInputCompany.classList.add('hiddenError');    
    errorCompany.classList.add('hiddenError');   
}

function borderFocusOutCompany(borderColorB) {
    borderColorB = inputCompany;
        borderColorB.style.borderBottomColor = "rgb(159, 173, 184)";   
        inputCompany.classList.remove('inputErrorCompany');
        errorCompany.classList.add('hiddenError');
        inputCompany.style.removeProperty('--color')
    if (borderColorB.value == '' || borderColorB.value == ' '){ 
    inputCompany.classList.add('inputErrorCompany');
    errorCompany.classList.remove('hiddenError');
    inputCompany.style.borderBottomColor = 'rgba(248,157,157,255)';
    inputCompany.style.setProperty('--color', 'red')
    }  
}

inputCompany.addEventListener("invalid", invalidInputCompany);
const badInputCompany = document.getElementById('inputErrorCompanyCheck');
    
    function invalidInputCompany(check) {
        check = inputCompany;
        badInputCompany.classList.remove('hiddenError'); 
        check.style.borderBottomColor = 'rgba(248,157,157,255)';
        errorCompany.classList.add('hiddenError');
    }


/* Title text box*/

const inputTitle = document.getElementById("contact-title");
const errorTitle = document.getElementById('inputErrorTitle');

inputTitle.addEventListener("focusin", borderFocusInTitle);
inputTitle.addEventListener("focusout", borderFocusOutTitle);

function borderFocusInTitle(borderColorA) {
    borderColorA = inputTitle;
    borderColorA.style.borderBottomColor = 'rgb(54, 83, 107)';
    badInputTitle.classList.add('hiddenError');
    errorTitle.classList.add('hiddenError');          
}

function borderFocusOutTitle(borderColorB) {
    borderColorB = inputTitle;
        borderColorB.style.borderBottomColor = "rgb(159, 173, 184)";   
        inputTitle.classList.remove('inputErrorTitle');
        errorTitle.classList.add('hiddenError');
        inputTitle.style.removeProperty('--color')
    if (borderColorB.value == '' || borderColorB.value == ' '){ 
    inputTitle.classList.add('inputErrorTitle');
    errorTitle.classList.remove('hiddenError');
    inputTitle.style.borderBottomColor = 'rgba(248,157,157,255)';
    inputTitle.style.setProperty('--color', 'red')
    }  
}

inputTitle.addEventListener("invalid", invalidInputTitle);
const badInputTitle = document.getElementById('inputErrorTitleCheck');
    
    function invalidInputTitle(check) {
        check = inputTitle;
        badInputTitle.classList.remove('hiddenError'); 
        check.style.borderBottomColor = 'rgba(248,157,157,255)';
        errorTitle.classList.add('hiddenError');
    }




/* Message text box*/

const inputMessage = document.getElementById("contact-message");
const errorMessage = document.getElementById('inputErrorMessage');

inputMessage.addEventListener("focusin", borderFocusInMessage);
inputMessage.addEventListener("focusout", borderFocusOutMessage);

function borderFocusInMessage(borderColorA) {
    borderColorA = inputMessage;
    borderColorA.style.borderBottomColor = 'rgb(54, 83, 107)';  
    errorMessage.classList.add('hiddenError');        
}

function borderFocusOutMessage(borderColorB) {
    borderColorB = inputMessage;
        borderColorB.style.borderBottomColor = "rgb(159, 173, 184)";   
        inputMessage.classList.remove('inputErrorMessage');
        errorMessage.classList.add('hiddenError');
        inputMessage.style.removeProperty('--color')
    if (borderColorB.value == '' || borderColorB.value == ' '){ 
    inputMessage.classList.add('inputErrorMessage');
    errorMessage.classList.remove('hiddenError');
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