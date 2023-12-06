const burgerOpen = document.getElementById("burger-toggle-btn-open");
const burgerClose = document.getElementById("burger-toggle-btn-close");
const navSidebar = document.getElementById("navSidebar");

burgerOpen.addEventListener("click", burgerOpened);
burgerClose.addEventListener("click", burgerClosed);

function burgerOpened() {
    burgerOpen.classList.add("hiddenNav");
    burgerClose.classList.remove("hiddenNav");
    navSidebar.classList.remove("hiddenNav");
}

function burgerClosed() {
   burgerClose.classList.add("hiddenNav");    
    burgerOpen.classList.remove("hiddenNav");
    navSidebar.classList.add("hiddenNav");
}