const toggle__open__menu = document.querySelector('.nav__toggle')
const toggle__close__menu = document.querySelector('.nav__toggle__close')
const menuLink = document.querySelectorAll('.nav__link')

function openMenu() {
  const menu = document.querySelector('.nav__menu')
  menu.classList.add('show__menu')
}
function closeMenu() {
  const menu = document.querySelector('.nav__menu')
  menu.classList.remove('show__menu')
}

menuLink.forEach(L => L.addEventListener('click', closeMenu))
toggle__open__menu.addEventListener('click', openMenu)
toggle__close__menu.addEventListener('click', closeMenu)

// EFEITOS DE SCROLL REVEAL

ScrollReveal({
  origin: 'bottom',
  distance: '100px',
  duration: 800
}).reveal(`
  #home .home__info,
  .title__education,
  .portifolio .title,
  .skill .title,
  .img__profile  
`)

ScrollReveal({
  origin: 'bottom',
  distance: '100px',
  duration: 1050
}).reveal(`
  .about__me .title,
  .about__me .paragraph,
  .about__me .personal__info,
  .education__info,
  .info__project__data,
  .list__skill
`)
