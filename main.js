document.addEventListener("click", (e) => {
  const sections = [
    "biology",
    "history",
    "famous-cats",
    "cat-needs",
  ];

  if (e.target.classList.contains("tooltip")) {
    document.getElementById("tooltip-text").classList.toggle("hidden");
    document.getElementById("tooltip-text").classList.toggle("fadeIn");
    document.getElementById("tooltip-text").classList.toggle("animated");
  }

  if (e.target.classList.contains("introduction")) {
    document.getElementById(e.target.getAttribute("section")).scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  } else if (sections.some((section) => e.target.classList.contains(section))) {
    document.getElementById(e.target.getAttribute("section")).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  }
});
