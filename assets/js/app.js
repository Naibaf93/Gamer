document.addEventListener("DOMContentLoaded", (e) => {
    let inputSearch = document.querySelector(".search__input");
    let btnSearch = document.querySelector(".navbar__button");

    btnSearch.addEventListener("click", () => {
        let visible = document.querySelector(".visible");

        if(visible){
            inputSearch.style.width = "0";
            inputSearch.style.padding = "0";
            inputSearch.classList.remove("visible");
        }else{
            inputSearch.style.width = "20rem";
            inputSearch.classList.add("visible");
        }
    });
});