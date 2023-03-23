const showMenu = (toggleButton, menuId) => {
  const toggle = document.getElementById(toggleButton),
    menu = document.getElementById(menuId)

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('showMenu')
    })
  }
}

const scrollHeader = () => {
  const header = document.getElementById('header')

  if (this.scrollY >= 100) {
    header.classList.add('boxShadow')
  } else {
    header.classList.remove('boxShadow')
  }
}

showMenu('navToggle', 'menu')
window.addEventListener('scroll', scrollHeader)
