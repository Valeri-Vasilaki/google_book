export function initializeSlider() {
  const dotOne = document.querySelector(".dot-one");
  const dotTwo = document.querySelector(".dot-two");
  const dotThree = document.querySelector(".dot-three");
  const coverSlide = document.querySelector(".cover-slide");

  const toSlideOne = function () {
    coverSlide.innerHTML =
      '<img src="./images/banner1.png" alt="black friday sale up to 60%" class="slide-one-img">';
    dotOne.classList.add("dot-active");
    dotTwo.classList.remove("dot-active");
    dotThree.classList.remove("dot-active");
  };

  const toSlideTwo = function () {
    coverSlide.innerHTML =
      '<img src="./images/banner2.png" alt="top 10 books for entrepreneurs" class="slide-two-img">';
    dotOne.classList.remove("dot-active");
    dotTwo.classList.add("dot-active");
    dotThree.classList.remove("dot-active");
  };

  const toSlideThree = function () {
    coverSlide.innerHTML =
      '<img src="./images/banner3.png" alt="check out our cozy books selection" class="slide-three-img">';
    dotOne.classList.remove("dot-active");
    dotTwo.classList.remove("dot-active");
    dotThree.classList.add("dot-active");
  };

  dotOne.addEventListener("click", toSlideOne);
  dotTwo.addEventListener("click", toSlideTwo);
  dotThree.addEventListener("click", toSlideThree);

  let currentIndex = 0;
  setInterval(function () {
    if (currentIndex === 0) {
      currentIndex = 1;
      toSlideTwo();
    } else if (currentIndex === 1) {
      currentIndex = 2;
      toSlideThree();
    } else if (currentIndex === 2) {
      currentIndex = 0;
      toSlideOne();
    }
  }, 5000);
}
