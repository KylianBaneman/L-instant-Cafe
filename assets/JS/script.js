let pages = document.querySelectorAll(".header__menu li")
let lastScrollTop = 0
let headerHidden = false
let navBar = document.querySelector(".header__menu")
let logo = document.querySelector(".header__img")
let reseaux = document.querySelector(".reseaux")
let inps = document.querySelectorAll(".contact input")
let tarea = document.querySelector("textarea")
let form = document.querySelector("form")
let menuBurgerIcon = document.querySelector(".burger--toggler")
let menuBurger = document.querySelector(".menuBurger")
let Overlay = document.querySelector(".overlay--burger")
let trigger = document.querySelector(".trigger")
let linkBurger = document.querySelectorAll(".menuBurger a")


pages.forEach(page => page.addEventListener("mouseenter" , () =>{
  let titleLink = page.querySelector(".lien")
  titleLink.style.transform = "scale(1.1)"
}))
pages.forEach(page => page.addEventListener("mouseleave" , () =>{
  let titleLink = page.querySelector(".lien")
  titleLink.style.transform = "scale(1)"
}))

form.addEventListener("submit" , toggleContact)
window.addEventListener("scroll" , scrollHeader)
menuBurgerIcon.addEventListener("click" , toggleBurger)
trigger.addEventListener("click" , toggleBurgerClose)
linkBurger.forEach(link => {
  link.addEventListener("click" , toggleBurgerClose)
})

function scrollHeader(){
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop
  if (scrollTop > lastScrollTop && scrollTop > 50) {
    // Si on scrolle vers le bas et qu'on a dépassé 50px, cache le header
    navBar.style.top = "-100px";
    logo.style.top = "-200px";
    reseaux.style.top = "-200px";
    headerHidden = true; // On marque que le header a été caché
  } else if (scrollTop < lastScrollTop && headerHidden) {
    // Si on remonte ET que le header avait été caché, on l'affiche
    navBar.style.top = "75px";
    logo.style.top = "0px";
    reseaux.style.top = "75px";
  }
  lastScrollTop = scrollTop
}


function toggleContact(e){
  e.preventDefault()
  let envoie = true
  inps.forEach(inp=>{
    if(inp.value === "" || tarea.value === ""){
      envoie = false
    }
  })
  if(envoie){
    Overlay_modal.classList.toggle("active")
    Modal.classList.toggle("active")
    inps.forEach(inp1 => inp1.disabled = true)
    tarea.disabled = true
  }
}

function toggleBurger(){
  menuBurgerIcon.classList.toggle("active")
  menuBurger.classList.toggle("active")
  Overlay.classList.toggle("active")
}
function toggleBurgerClose(){
  menuBurgerIcon.classList.toggle("active")
  menuBurger.classList.toggle("active")
  Overlay.classList.toggle("active")
}