const hamburger = document.getElementsByClassName('hamburger')[0];
const navItems = document.getElementsByClassName('nav-list')[0];

hamburger.addEventListener('click', function(){
    console.log('clicked')
    navItems.classList.toggle('active');
    hamburger.classList.toggle('active');
})
AOS.init({
    duration: 1200,
  })