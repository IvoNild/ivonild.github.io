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

window.sr = ScrollReveal({ reset: true })

sr.reveal('#home .home__info', {
  origin: 'bottom',
  distance: '100px',
  duration: 1300
})

sr.reveal(
  '.title__education,.skill .title , .portifolio .title, .img__profile, .list__skill, .footer',
  {
    origin: 'left',
    distance: '100px',
    duration: 900
  }
)

sr.reveal('.education__info, .about__me', {
  origin: 'right',
  distance: '100px',
  duration: 2000
})
sr.reveal('.info__project__data', {
  origin: 'bottom',
  distance: '100px',
  duration: 2000
})

sr.reveal('.img__project', {
  origin: 'top',
  distance: '100px',
  duration: 900
})

// ScrollReveal({
//   origin: 'bottom',
//   distance: '100px',
//   duration: 800
// }).reveal(`
//   #home .home__info,
//   .title__education,
//   .portifolio .title,
//   .skill .title,
//   .img__profile,
//   .footer div
// `)

// ScrollReveal({
//   origin: 'bottom',
//   distance: '100px',
//   duration: 1050
// }).reveal(`
//   .about__me .title,
//   .about__me .paragraph,
//   .about__me .personal__info,
//   .education__info,
//   .info__project__data,
//   .list__skill
// `)

// Manipulação de texto
document.addEventListener('DOMContentLoaded', () => {
  new TypeIt('.animated', {
    speed: 200,
    loop: true
  })
    .type('Web', { delay: 1500 })
    .delete(3)
    .type('Mobile', { delay: 1100 })
    .go()
})

document.addEventListener('DOMContentLoaded', () => {
  new TypeIt('.animatedFooter', {
    speed: 200,
    loop: true
  })
    .type('Web', { delay: 1500 })
    .delete(3)
    .type('Mobile', { delay: 1100 })
    .go()
})
