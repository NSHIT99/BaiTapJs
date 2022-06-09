(function clickShowCanvas() {
  const listButton = document.querySelectorAll(".btn-primary");
  const navbar = document.getElementById("offcanvasExample");
  for (let i = 0; i < listButton.length; i++) {
    listButton[i].addEventListener("click", () => {
      navbar.classList.toggle("show");
      navbar.style.transition = "0.5s";
      navbar.style.transform = "translateX(0)";
    });
  }
})();

(function clickShowDropdown() {
  const dropdown = document.querySelectorAll(".dropdown");
  const toggleDropdown = document.getElementById("dropdownMenu");
  for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", () => {
      toggleDropdown.classList.toggle("show");
      toggleDropdown.style.transition = "0.5s";
      toggleDropdown.style.transform = "translateX(0)";
    });
  }
})();

(function clickCancelCanvas() {
  const listButton = document.querySelectorAll(".fa-close");
  const navbar = document.getElementById("offcanvasExample");
  for (let i = 0; i < listButton.length; i++) {
    listButton[i].addEventListener("click", () => {
      navbar.classList.remove("show");
    });
  }
})();

(function cursorWait() {
  const cursor = document.querySelectorAll(".card-item");
  const showPointer = document.getElementById("show-pointer");
  for (let i = 0; i < cursor.length; i++) {
    showPointer.classList.add("cursor-wait");
}
})();
