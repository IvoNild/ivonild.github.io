//Mostrando e escondendo o menu

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu')
    })
  }
}

showMenu('nav-toggle', 'nav-menu')

//FECHAR O MENU

const menuLink = document.querySelectorAll('.nav__link')

function closeMenu() {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}

menuLink.forEach(L => L.addEventListener('click', closeMenu))

//REMOVER E MOSTRAR O BO_SHADOW DO HEADER

function scrollHeader() {
  const scrollHeader = document.getElementById('header')

  if (this.scrollY >= 100) {
    scrollHeader.classList.add('box__shadow__header')
  } else {
    scrollHeader.classList.remove('box__shadow__header')
  }
}

window.addEventListener('scroll', scrollHeader)
