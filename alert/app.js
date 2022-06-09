function myFunction() {
  const idRandom = Math.floor(Math.random() * 100);
  const alterPlaceholder = document.getElementById("liveAlertPlaceholder");
  const wrapper = document.createElement("div");
  wrapper.innerHTML = `<div class="alert alert-dismissible" id="${idRandom}">Nice, you triggered this alert message!<i class="fa fa-times" style="font-size:36px" onclick="toggleBtn()"></i></div>`;
  alterPlaceholder.appendChild(wrapper);
  setTimeout(() => {
    wrapper.parentNode.removeChild(wrapper);
  }, 5000);
}

function toggleBtn() {
  const getAlterWrapper = document.getElementsByClassName("alert-dismissible");
  for (let i = 0; i < getAlterWrapper.length; i++) {
    getAlterWrapper[i].onclick = function () {
      const div = this.parentElement;
      div.style.opacity = "0";
      setTimeout(function () {
        div.style.display = "none";
      }, 1000);
    };
  }
}
