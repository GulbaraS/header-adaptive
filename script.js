let menuBtn = document.querySelector(".menu-btn");

let menu = document.querySelector(".header-nav");

menuBtn.addEventListener("click", function(){
    menu.classList.toggle("active");

    if (className == "active"){
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    };
});