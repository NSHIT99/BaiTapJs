(function clickBtn() {
  const listButton = document.querySelectorAll(".btn");
  for (let i = 0; i < listButton.length; i++) {
    listButton[i].addEventListener("click", () => {
      listButton[i].classList.add("active");
      const color = listButton[i].getAttribute("DataColor");
      listButton[i].style.borderColor = color;
    });
  }
})();
