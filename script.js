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
  const slideWidth = slides[0].clientWidth;
  let count = 1;
  container.style.transition = "1s ease-in-out";

  setTimeout(() => {
    container.style.transform = `translateX(${-slideWidth * count}px)`;
    count++;
  }, 3000);
  setTimeout(() => {
    container.style.transform = `translateX(${-slideWidth * count}px)`;
    count--;
  }, 6000);
  setTimeout(() => {
    container.style.transform = `translateX(${-slideWidth * count}px)`;
    count--;
  }, 9000);
  setTimeout(() => {
    container.style.transform = `translateX(${-slideWidth * count}px)`;
  }, 12000);
  setTimeout(() => {
    activateCarousel();
  }, 15000);
}

activateCarousel();
