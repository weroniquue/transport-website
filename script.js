var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

document.getElementById("play-video").addEventListener("click", () => {
  modal.classList.add("div-with-center-items");
});

window.addEventListener("click", event => {
  if (event.target == modal) {
    document
      .getElementsByClassName("youtube-video")[0]
      .contentWindow.postMessage(
        '{"event":"command","func": "pauseVideo","args":""}',
        "*"
      );
    modal.classList.remove("div-with-center-items");
  }
});

document.getElementById("mobile-menu").addEventListener("click", () => {
  var navigation = document.getElementsByClassName("navigation")[0];
  navigation.classList.contains("navigation-active")
    ? navigation.classList.remove("navigation-active")
    : navigation.classList.add("navigation-active");
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("services");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "flex";
}
