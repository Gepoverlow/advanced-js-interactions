Array.from(document.querySelectorAll(".letter")).forEach((el) => {
  el.innerText = randomLetter();
});

function randomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function activateCarousel() {
  const container = document.querySelector(".carouselContainer");
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  const previous = document.querySelector(".previous");
  const next = document.querySelector(".next");

  let current = 0;
  let lastSlide = slides.length - 1;
  let firstSlide = 0;
  let timeOut;

  next.addEventListener("click", () => {
    displayNextSlide();
    clearTimeout(timeOut);
    setAutomaticLoop();
  });

  previous.addEventListener("click", () => {
    displayPreviousSlide();
    clearTimeout(timeOut);
    setAutomaticLoop();
  });

  container.addEventListener("click", (e) => {
    if (e.target.id === "i-one") {
      updateDisplayOne(0);
      clearTimeout(timeOut);
      setAutomaticLoop();
    }
    if (e.target.id === "i-two") {
      updateDisplayOne(1);
      clearTimeout(timeOut);
      setAutomaticLoop();
    }
    if (e.target.id === "i-three") {
      updateDisplayOne(2);
      clearTimeout(timeOut);
      setAutomaticLoop();
    }
  });

  setAutomaticLoop();

  function updateDisplayOne(selected) {
    slides[current].classList.remove("active");
    dots[current].classList.remove("i-active");
    current = selected;
    slides[current].classList.add("active");
    dots[current].classList.add("i-active");
  }

  function displayNextSlide() {
    if (current === lastSlide) {
      slides[current].classList.remove("active");
      dots[current].classList.remove("i-active");
      current = firstSlide;
      slides[current].classList.add("active");
      dots[current].classList.add("i-active");
    } else {
      slides[current].classList.remove("active");
      dots[current].classList.remove("i-active");
      current++;
      slides[current].classList.add("active");
      dots[current].classList.add("i-active");
    }
  }

  function displayPreviousSlide() {
    if (current === firstSlide) {
      slides[current].classList.remove("active");
      dots[current].classList.remove("i-active");
      current = lastSlide;
      slides[current].classList.add("active");
      dots[current].classList.add("i-active");
    } else {
      slides[current].classList.remove("active");
      dots[current].classList.remove("i-active");
      current--;
      slides[current].classList.add("active");
      dots[current].classList.add("i-active");
    }
  }

  function setAutomaticLoop() {
    timeOut = setTimeout(() => {
      console.log("hi");
      displayNextSlide();
      setAutomaticLoop();
    }, 5000);
  }
}

activateCarousel();
