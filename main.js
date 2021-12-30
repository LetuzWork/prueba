const menuBtn = document.querySelector(".symbol");
const nav = document.querySelector("nav");
let isOpen = false;

menuBtn.addEventListener("click", ()=>{
    isOpen = !isOpen;
    console.log(isOpen);
    if(isOpen){
        menuBtn.classList.add("open"); 
        nav.classList.add("open");
    }else{
        menuBtn.classList.remove("open");
        nav.classList.remove("open");
    }
})