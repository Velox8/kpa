const navMoblie = document.querySelector('.nav-mobile')
const burgerBtn = document.querySelector('.burger')
const navContainer = document.querySelector('.nav-container')



const handleNav = () => {

    navMoblie.classList.toggle('nav-mobile-active')
    navContainer.classList.toggle(
        'nav-container-active'
    )
    burgerBtn.classList.toggle('burger-active')
}
document.addEventListener("scroll", () => {
    const navContainer = document.querySelector('.nav-container');
    if (window.scrollY > 600) { // Moment, w którym nawigacja ma się przykleić
        navContainer.classList.add('sticky');
    } else {
        navContainer.classList.remove('sticky');
    }
});




burgerBtn.addEventListener('click',handleNav)