let short_nav = document.querySelector(".short_nav")
let nav_btn2_img1 = document.querySelector(".nav_btn2_img1")
let nav_btn2_img2 = document.querySelector(".nav_btn2_img2")
let short_nav_a = document.querySelectorAll(".short_nav_a")
let logo_h2 = document.querySelector(".logo_h2")

let display_none = document.querySelector(".display_none")


nav_btn2_img1.addEventListener("click", function(){
    short_nav.classList.remove("display_none")
    nav_btn2_img1.classList.add("display_none")
    nav_btn2_img2.classList.remove("display_none")
})
nav_btn2_img2.addEventListener("click", function(){
    short_nav.classList.add("display_none")
    nav_btn2_img1.classList.remove("display_none")
    nav_btn2_img2.classList.add("display_none")
})

short_nav_a.forEach(e => {
    e.addEventListener("click", function(){
        short_nav.classList.add("display_none")
        nav_btn2_img1.classList.remove("display_none")
        nav_btn2_img2.classList.add("display_none")
    })
});

logo_h2.addEventListener("click", function(){
    location.href = '#'
})

