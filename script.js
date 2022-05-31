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
      handleBottomIndicators(0);
    }
    if (e.target.id === "i-two") {
      handleBottomIndicators(1);
    }
    if (e.target.id === "i-three") {
      handleBottomIndicators(2);
    }
  });

  function handleBottomIndicators(selected) {
    slides[current].classList.remove("active");
    dots[current].classList.remove("i-active");
    current = selected;
    slides[current].classList.add("active");
    dots[current].classList.add("i-active");
    clearTimeout(timeOut);
    setAutomaticLoop();
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
      displayNextSlide();
      setAutomaticLoop();
    }, 5000);
  }
  setAutomaticLoop();
}

function activateCollage() {
  const collageImages = document.querySelectorAll(".image");
  const extinctSpecies = [
    {
      name: "Bramble Cay Melomys",
      url: "Bramble_Cay_Melomys.jpg",
      yearOfExtinction: "2015",
    },
    {
      name: "Carolina Parakeet",
      url: "Carolina_Parakeet.jpeg",
      yearOfExtinction: "1918",
    },
    {
      name: "Smooth Handfish",
      url: "Smooth_Handfish.jpg",
      yearOfExtinction: "1822",
    },
    {
      name: "Yangtze River Dolphin",
      url: "Yangtze_River_Dolphin.jpg",
      yearOfExtinction: "2002",
    },
    {
      name: "Northern White Rhinoceros",
      url: "The_Northern_White_Rhinoceros.jpeg",
      yearOfExtinction: "2018",
    },
    {
      name: "Spix Macaw",
      url: "The_Spix_Macaw.jpeg",
      yearOfExtinction: "2021",
    },
    {
      name: "Thylacine",
      url: "The_Thylacine.jpeg",
      yearOfExtinction: "1999",
    },
    {
      name: "Passenger Pigeon",
      url: "The_Passenger_Pigeon.jpeg",
      yearOfExtinction: "1914",
    },
    {
      name: "Quagga",
      url: "The_Quagga.jpg",
      yearOfExtinction: "1900",
    },
    {
      name: "Pyrenean Ibex",
      url: "The_Pyrenean_Ibex.png",
      yearOfExtinction: "2009",
    },
    {
      name: "Golden Toad",
      url: "The_Golden_Toad.jpeg",
      yearOfExtinction: "1994",
    },
    {
      name: "Zanzibar Leopard",
      url: "Zanzibar_Leopard.jpg",
      yearOfExtinction: "1995",
    },
    {
      name: "Po'ouli",
      url: "Po'ouli.jpg",
      yearOfExtinction: "1970",
    },
    {
      name: "Madeiran Large White",
      url: "Madeiran_Large_White.jpg",
      yearOfExtinction: "1898",
    },
    {
      name: "Tecopa Pupfish",
      url: "Tecopa_Pupfish.jpg",
      yearOfExtinction: "1973",
    },
    {
      name: "Falkland Islands Wolf",
      url: "Falkland_Islands_Wolf.jpg",
      yearOfExtinction: "1800",
    },
  ];

  for (let i = 0; i < collageImages.length; i++) {
    collageImages[i].style.backgroundImage = `url("./images/grid/${extinctSpecies[i].url}")`;
    collageImages[i].addEventListener("click", (e) => {
      handleInfo(extinctSpecies[i], e.target);
    });
  }

  function handleInfo(species, target) {
    collageImages.forEach((collage) => {
      collage.style.transform = "scale(1)";
      collage.style.transition = "transform 0.25s ease";
      collage.style.zIndex = "0";
      collage.innerHTML = "";
    });

    target.style.transform = "scale(1.5)";
    target.style.transition = "transform 0.25s ease";
    target.style.zIndex = "2";

    const infoText = document.createElement("span");
    infoText.className = "infoText";
    infoText.textContent = `The ${species.name} became extinct in ${species.yearOfExtinction}`;
    target.appendChild(infoText);
  }
}

function activatePokemonHover() {
  const pokemons = document.querySelectorAll(".poke");

  for (let i = 0; i < pokemons.length; i++) {
    pokemons[i].addEventListener("mouseover", (e) => {
      getPokemonSprite(e.target.innerText, e.target);
    });

    pokemons[i].addEventListener("mouseout", (e) => {
      removePopUp(e.target);
    });
  }

  async function getPokemonSprite(name, element) {
    let formattedName = name.trim().toLowerCase().replaceAll("'", "");

    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${formattedName}`);
    const response = await data.json();

    if (response.sprites) {
      const pokemonSprite = response.sprites.front_default;
      displayPopUp(pokemonSprite, element);
    }
  }

  function displayPopUp(sprite, element) {
    const spriteImg = document.createElement("img");
    spriteImg.className = "pokePopUp";
    spriteImg.src = `${sprite}`;
    element.appendChild(spriteImg);
  }

  function removePopUp(element) {
    const popUp = document.querySelector(".pokePopUp");
    element.removeChild(popUp);
  }
}

function activateRedCircle() {
  const gameContainer = document.getElementById("red-game-container");
  const redCircle = document.querySelector(".chaser");
  let x;
  let y;
  gameContainer.addEventListener("mousemove", (e) => {
    if (e.target.className !== "chaser") {
      x = e.offsetX - 25;
      y = e.offsetY - 25;

      chaseMouse(x, y);
    }
  });

  function chaseMouse(x, y) {
    redCircle.style.left = `${x}px`;
    redCircle.style.top = `${y}px`;
  }
}

activateCarousel();
activateCollage();
activatePokemonHover();
activateRedCircle();
