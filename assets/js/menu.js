document.activeElement("DOMContentLoaded", (e) => {
    let mobileBtn = document.querySelector(".navbar__mobile-btn");
    let mobileMenu = document.querySelector(".navbar__mobile-list");

    mobileBtn.addEventListener("click", () => {
        let menuOpen = document.querySelector(".menu__open");

        if(!menu__open) {
            mobileMenu.style.display = "block";
            mobileMenu.classList.add("menu__open");
        }else{
            mobileMenu.style.display = "none";
            mobileMenu.classList.remove("menu__open");
        }
    });
});