/*const navLinks = document.querySelector('.nav-links')
function onToggleMenu(e){
    e.name = e.name === 'menu' ? 'close' : 'menu'
    navLinks.classList.toggle('top-[9%]')
}*/
function darkModeToggle() {
    const body = document.querySelector("body");
    body.classList.toggle("dark");
  }
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("hidden");
  const menuIcon = document.getElementById("menuIcon");
  if (navbar.classList.contains("hidden")) {
    menuIcon.setAttribute("name", "menu");
  } else {
    menuIcon.setAttribute("name", "close");
  }