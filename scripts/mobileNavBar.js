function toggleMobileNavBar() {
  const mobileNav = document.getElementById('nav__mobile')
  const iconMenu = document.getElementById('icon__hamburger')

  if (mobileNav.style.display === 'block') {
    iconMenu.className = 'bx bx-menu'
    mobileNav.style.display = 'none'
  } else {
    iconMenu.className = 'bx bx-x'
    mobileNav.style.display = 'block'
  }
}
