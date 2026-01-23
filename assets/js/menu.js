document.addEventListener("DOMContentLoaded", (e) => {
    let mobileBtn = document.querySelector(".navbar__mobile-btn");
    let mobileMenu = document.querySelector(".navbar__mobile-list");

    mobileBtn.addEventListener("click", () => {
        let menu_open = document.querySelector(".menu_open");

        if(!menu_open) {
            mobileMenu.style.display = "block";
            mobileMenu.classList.add("menu_open");
        }else{
            mobileMenu.style.display = "none";
            mobileMenu.classList.remove("menu_open");
        }
    });

    const submenu = (boton, submenu, className) => {
        boton.addEventListener("click", () => {
            let drop = document.querySelector("."+className);

            if(!drop) {
                submenu.style.display = "block";
                submenu.classList.add(className);
            }else{
                submenu.style.display = "none";
                submenu.classList.remove(className);
            }
        })
    }

    // Primer Submenu
    let dropDown1Btn = document.querySelector("#icon1");
    let dropDown1Submenu = document.querySelector("#submenu1");

    // Segundo submenu
    let dropDown2Btn = document.querySelector("#icon2");
    let dropDown2Submenu = document.querySelector("#submenu2");

    // Ejecutar funcionalidad
    submenu(dropDown1Btn, dropDown1Submenu, "drop1");
    submenu(dropDown2Btn, dropDown2Submenu, "drop2");
});