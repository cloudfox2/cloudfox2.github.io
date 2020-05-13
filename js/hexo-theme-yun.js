// scroll
function scrollPercent(curTop) {
  const bodyHeight = document.body.clientHeight;
  const windowHeight = window.innerHeight;
  const circumference = progressCircle.r.baseVal.value * 2 * Math.PI;
  const offset =
    circumference - (curTop / (bodyHeight - windowHeight)) * circumference;
  progressCircle.setAttribute(
    "stroke-dasharray",
    `${circumference} ${circumference}`
  );
  progressCircle.setAttribute("stroke-dashoffset", offset);
}

function initPage() {
  if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal(".post-card");
  }

  // open sidebar
  document.querySelector(".sidebar-toggle").onclick = function() {
    this.querySelector(".hamburger").classList.toggle("is-active");
    document.querySelector(".container").classList.toggle("sidebar-open");
  };

  window.addEventListener("scroll", function() {
    goUp.classList.toggle("show", window.scrollY > 64);
    scrollPercent(window.scrollY);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initPage();
});
