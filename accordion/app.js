function toggleClass(id, icon) {
  const contentRemove = document.getElementsByClassName("accordion-collapse");
  const listIcon = document.getElementsByClassName("fa");
  const content = document.getElementById(id);
  const changeIcon = document.getElementById(icon);
  for (i = 0; i < contentRemove.length; i++) {
    contentRemove[i].classList.remove("show");
    listIcon[i].classList.remove("fa-sort-desc");
    listIcon[i].classList.add("fa-sort-asc");
  }
  content.classList.add("show");
  changeIcon.classList.remove("fa-sort-asc");
  changeIcon.classList.add("fa-sort-desc");
}
