function toggleMenu(){
    const menuMobile = document.getElementById("menu-mobile")

    if(menuMobile.className === "menu-mobile-active"){
        menuMobile.className = "menu-mobile"
    }else{
        menuMobile.className = "menu-mobile-active"
    }
}

var btn = document.querySelector("#backToTop");
btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});