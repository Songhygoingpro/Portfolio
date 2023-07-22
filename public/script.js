
   
   function darkModeToggle() {
    const body = document.querySelector("body");
    const moonIcon = document.querySelector("#moon");
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
      moonIcon.setAttribute("name", "sunny");
    } else {
      moonIcon.setAttribute("name", "moon");
    }
  }
  function toggleNavbar() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("hidden");
    const menuIcon = document.getElementById("menuIcon");
    if (navbar.classList.contains("hidden")) {
      menuIcon.setAttribute("name", "menu");
    } else {
      menuIcon.setAttribute("name", "close");
    }
}