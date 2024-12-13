const navMobile = document.querySelector('.nav-mobile');
const burgerBtn = document.querySelector('.burger');
const buttonText = document.querySelector('.button-container__p');
const navContainer = document.querySelector('.nav-container');

const handleNav = () => {
	navMobile.classList.toggle('nav-mobile-active');
	navContainer.classList.toggle('nav-container-active');
	burgerBtn.classList.toggle('burger-active');
};

document.addEventListener('scroll', () => {
	const navContainer = document.querySelector('.nav-container');
	if (window.scrollY > 600) {
		navContainer.classList.add('sticky');
	} else {
		navContainer.classList.remove('sticky');
	}
});
burgerBtn.addEventListener('click', handleNav);
buttonText.addEventListener('click', handleNav);
