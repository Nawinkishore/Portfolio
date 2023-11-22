let menuItems = document.getElementById("menu");
let hamburgerOpen = document.getElementById("hamberger-open");
let hamburgerClose = document.getElementById("hamberger-close");

function toggle(){
    if(menuItems.style.display=="none")
    {
        menuItems.style.display = "block";
        hamburgerOpen.style.display='none';
        hamburgerClose.style.display='block';
    }
    else
    {
        menuItems.style.display='none';
        hamburgerClose.style.display='none';
        hamburgerOpen.style.display='block';
    }
}