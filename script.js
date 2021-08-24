const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
const thumb = document.querySelectorAll(".thumb");

container.addEventListener("click", function (e) {
  //cek apakah yang di klik thumb
  if (e.target.className == "thumb") {
    jumbo.src = e.target.src;
    jumbo.classList.add("fade");
    setTimeout(() => {
      jumbo.classList.remove("fade");
    }, 500);

    thumb.forEach((thumb) => {
      thumb.className = "thumb";
    });
    e.target.classList.add("active");
  }
});
