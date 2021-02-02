const navbar = document.querySelector(".navbar")
const ham = document.querySelector(".menu")

const toggleHamburger = () => {
    navbar.classList.toggle("showNav")
};

ham.addEventListener("click", toggleHamburger)

const menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", toggleHamburger)
}
);