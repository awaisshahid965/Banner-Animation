function chalVai() {
  anime({
    targets: ".intro",
    rotateY: ["100deg", "-10deg"],
    opacity: [0.85, 1],
    easing: "easeInOutCirc",
    duration: 500,
    complete: () => {
      document.querySelector(".intro").classList.add("hil_vai");
    },
  });

  anime({
    targets: ".header",
    opacity: [0, 1],
    translateZ: [500, 0],
    duration: 500,
    delay: 300,
    easing: "easeInOutCirc",
  });

  anime({
    targets: ".steps-container",
    opacity: [1, 1],
    duration: 0,
    delay: 1000,
  });

  anime({
    targets: ".steps-container .left",
    opacity: [0, 1],
    duration: 300,
    easing: "easeInOutCirc",
    delay: 1000,
  });

  setTimeout(() => {
    document.querySelector("h2").innerHTML = "2 easy <br /> steps";
  }, 1200);

  setTimeout(() => {
    document.querySelector("h2").innerHTML = "3 easy <br /> steps";
  }, 1300);

  anime({
    targets: ".steps-container .left p s",
    width: ["100%", 0],
    duration: 200,
    delay: 1600,
    easing: "easeInOutCirc",
  });

  anime({
    targets: ".right li:first-child",
    opacity: [0, 1],
    duration: 20,
    delay: 2100,
    easing: "easeInOutCirc",
  });

  anime({
    targets: ".right li:first-child",
    width: [0, "100%"],
    duration: 250,
    delay: 2050,
    easing: "easeOutSine",
    complete: () => {
      document.querySelector(".right li:first-child").classList.add("ok");
    },
  });

  anime({
    targets: ".right li:first-child + li",
    opacity: [0, 1],
    duration: 20,
    delay: 2900,
    easing: "easeInOutCirc",
  });

  anime({
    targets: ".right li:first-child + li",
    width: [0, "100%"],
    duration: 250,
    delay: 2850,
    easing: "easeInOutCirc",
    complete: () => {
      document.querySelector(".right li:first-child + li").classList.add("ok");
    },
  });

  anime({
    targets: ".right li:last-child",
    opacity: [0, 1],
    duration: 20,
    delay: 3800,
    easing: "easeInOutCirc",
  });

  anime({
    targets: ".right li:last-child",
    width: [0, "100%"],
    duration: 250,
    delay: 3750,
    easing: "easeInOutCirc",
    complete: () => {
      document.querySelector(".right li:last-child").classList.add("ok");

      // resets
      setTimeout(() => {
        document.querySelectorAll("li.ok").forEach((elem) => {
          elem.classList.remove("ok");
        });
        document.querySelector(".intro").classList.remove("hil_vai");
        document.querySelector("h2").innerHTML = "1 easy <br /> steps";

        // again
        chalVai();
      }, 16000);
    },
  });
}

chalVai();
