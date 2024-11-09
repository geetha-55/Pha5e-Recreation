document.addEventListener('DOMContentLoaded', () => {
  gsap.from('.hero-content', { duration: 1, y: -50, opacity: 0, ease: 'power2.out' });
});

document.addEventListener('mousemove', (e) => {
  const { clientX: x, clientY: y } = e;
  const hero = document.querySelector('.hero');
  const { offsetWidth: width, offsetHeight: height } = hero;
  
  const moveX = (x / width - 0.5) * 20;
  const moveY = (y / height - 0.5) * 20;

  gsap.to('.hero-content', { x: moveX, y: moveY, duration: 0.5, ease: 'power1.out' });
});
