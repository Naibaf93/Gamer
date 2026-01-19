document.addEventListener("DOMContentLoaded", (e) =>{

    let marquee = (selector, speed) => {
        const list = document.querySelector(selector);
        let move = 0;

        setInterval(() => {
           list.style.marginLeft = `-${move}px` 
        
           if(move > list.clientWidth){
              move = 0;
           }

           move = move + speed;
        }, 0);
        
    }

    marquee(".marquee__container", 0.2);
});