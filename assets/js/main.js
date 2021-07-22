const header = document.querySelector("header")
const upBtn = document.querySelector(".up")
window.addEventListener("scroll", () =>{
    if(window.scrollY > 100){
        header.classList.add("header-bg")
        upBtn.classList.add("up-show")
    }else{
        header.classList.remove("header-bg")
        upBtn.classList.remove("up-show")
    }
})

upBtn.addEventListener("click", () =>{
    window.scrollTo(0,0)
})