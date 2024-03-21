function changeImg(img) {
  document.querySelector(".tea-logo img").src = `./img/img${img}.png`;

  if (img == 1) {
    document.querySelector(".waning-moon-017143").style.background = "#017142be";
  }
  if (img == 2) {
    document.querySelector(".waning-moon-017143").style.background = "pink";
  }
  if (img == 3) {
    document.querySelector(".waning-moon-017143").style.background = "#d752b1";
  }
}
