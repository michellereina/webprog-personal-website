document.addEventListener('mousemove', (e) => {
    const sparkle = document.createElement('div');
    sparkle.classList.add('cursor-sparkle');
    sparkle.style.top = `${e.clientY}px`;
    sparkle.style.left = `${e.clientX}px`;
    document.body.appendChild(sparkle);
  
    setTimeout(() => {
      sparkle.remove();
    }, 500);
  });
  
  const container = document.querySelector('.sparkling-background');

function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  sparkle.style.top = `${Math.random() * 100}%`;
  sparkle.style.left = `${Math.random() * 100}%`;
  sparkle.style.animationDelay = `${Math.random() * 3}s`;
  container.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 3000);
}

setInterval(createSparkle, 200);