document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('startBtn');

  // Fade-in saga.png at 11 seconds
  setTimeout(() => {
    startBtn.style.opacity = '1';
  }, 11000); // 11 seconds
});