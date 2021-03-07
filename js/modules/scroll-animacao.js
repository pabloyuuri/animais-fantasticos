// Anima Scroll
export default function initAnimacaoScroll() {
  const section = document.querySelectorAll('[data-anime="scroll"]');

  function animaScroll() {
    const metadeWindow = window.innerHeight * 0.6;
    section.forEach((item) => {
      const sectionTop = item.getBoundingClientRect().top - metadeWindow;
      if (sectionTop < 0) {
        item.classList.add('ativo');
      } else if (item.classList.contains('ativo')) {
        item.classList.remove('ativo');
      }
    });
  }
  if (section.length) {
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
