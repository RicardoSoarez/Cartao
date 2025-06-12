function mostrarSurpresa() {
  const url = "https://vm.tiktok.com/ZMSr9EWYs/";
  window.open(url, "_blank");
}

document.addEventListener('click', (event) => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      const offsetX = Math.random() * 100 - 50; 
      const offsetY = Math.random() * 50 - 25; 
      createHeart(event.pageX + offsetX, event.pageY + offsetY);
    }, i * 100); // delay entre cada coração
  }
});

function createHeart(x, y) {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = x + 'px';
  heart.style.top = y + 'px';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2000);
}
