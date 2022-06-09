const queryBtn = document.querySelector(".btn-primary");
let click = true;

(function showBorder() {
  queryBtn.addEventListener("click", function (event) {
    event.stopImmediatePropagation()
    if (click) {
      console.log(click);
      click = !click;
      queryBtn.style.border = "2px solid yellow";
    } else {
      click = !click;
      queryBtn.style.border = "2px solid";
    }
  });
})();

document.addEventListener("click", function () {
  click = !click;
  queryBtn.style.border = "2px solid";
});
