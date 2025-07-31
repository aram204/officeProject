const container = document.querySelector('.cursor-tail-container');
const tailLength = 5;
const dots = [];

for (let i = 0; i < tailLength; i++) {
  const dot = document.createElement('div');
  dot.classList.add('cursor-dot');

  // Set fading opacity: first dot = 1, last dot = 0.1
  const opacity = 1 - i / tailLength;
  console.log(opacity)
  dot.style.opacity = opacity;

  container.appendChild(dot);
  dots.push({ element: dot, x: 0, y: 0 });
}

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateTail() {
  let x = mouseX;
  let y = mouseY;

  dots.forEach((dot, i) => {
    dot.x += (x - dot.x) * 0.2;
    dot.y += (y - dot.y) * 0.2;
    dot.element.style.transform = `translate(${dot.x}px, ${dot.y}px)`;

    x = dot.x;
    y = dot.y;
  });

  requestAnimationFrame(animateTail);
}

animateTail();
