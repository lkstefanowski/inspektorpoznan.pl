const hamburgerBtn = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.nav__list-mobile')

const showMobileMenu = () =>{
    if(hamburgerBtn.classList.contains('is-active')===true){
        hamburgerBtn.classList.toggle('is-active')
        mobileMenu.classList.remove('active')
    } else{
        hamburgerBtn.classList.toggle('is-active')
        mobileMenu.classList.add('active')
    }
}
hamburgerBtn.addEventListener('click', showMobileMenu)