//cursor
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#481c44",
  "#4e1e4a",
  "#54204f",
  "#5b2355",
  "#61255b",
  "#672760",
  "#6e2966",
  "#752b6c",
  "#7b2d72",
  "#823078",
  "#89327e",
  "#903484",
  "#903484",
  "#943688",
  "#99378c",
  "#9d3990",
  "#a23a94",
  "#a63c99",
  "#ab3e9d",
  "#b03fa1",
  "#b441a5",
  "#b943a9",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

//animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => observer.observe(el));
