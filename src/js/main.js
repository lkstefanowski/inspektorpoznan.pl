const hamburgerBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.nav__list-mobile');
const sectionsToShow = document.querySelectorAll('.to-show');
const touchIcons = document.querySelectorAll('.icon-tabler');

const showMobileMenu = () => {
	if (hamburgerBtn.classList.contains('is-active') === true) {
		hamburgerBtn.classList.toggle('is-active');
		mobileMenu.classList.remove('active');
	} else {
		hamburgerBtn.classList.toggle('is-active');
		mobileMenu.classList.add('active');
	}
};

const mobileLinkUse = (e) => {
	if (e.target.classList.contains('mobile-link')) {
		mobileMenu.classList.remove('active');
		hamburgerBtn.classList.remove('is-active');
	}
};

const showContent = () => {
	for (let i = 1; i < sectionsToShow.length; i++) {
		const sectionParam = sectionsToShow[i].getBoundingClientRect();
		const windowHeight = window.innerHeight;
		if (sectionParam.y - 50 < windowHeight) {
			sectionsToShow[i].classList.add('show-it');
		}
	}
};

const touchDeviceChecking = () => {
	if (
		'ontouchstart' in document.documentElement ||
		navigator.maxTouchPoints > 0 ||
		navigator.msMaxTouchPoints > 0
	) {
		touchIcons.forEach((icon) => icon.classList.add('invisible'));
	}
};
touchDeviceChecking()

hamburgerBtn.addEventListener('click', showMobileMenu);
mobileMenu.addEventListener('click', mobileLinkUse);
window.addEventListener('scroll', showContent);
