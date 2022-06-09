(function clickShowNavbar() {
  const listButton = document.querySelectorAll(".navbar-toggler");
  const navbar = document.getElementById("navbarSupportedContent");
  for (let i = 0; i < listButton.length; i++) {
    listButton[i].addEventListener("click", () => {
      navbar.classList.toggle("show");
    });
  }
})();

(function clickShowDropdown() {
  const listButton = document.querySelectorAll(".dropdown");
  listButton.forEach((item) => {
    item.addEventListener("click", () => {
      const dropdownContentElement = item.querySelector("ul");
      dropdownContentElement.classList.toggle("show-dropdown");
    });
  });
})();
