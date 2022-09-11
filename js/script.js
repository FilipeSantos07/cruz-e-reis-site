var menu = document.querySelector(".menu")
var navMenu = document.querySelector(".navigation ul")

menu.addEventListener("click",() => {
    menu.classList.toggle("ativo")
    navMenu.classList.toggle("ativo")
})