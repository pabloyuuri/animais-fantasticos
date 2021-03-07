export default function initScrollSuave() {
  console.log('initScrollSuave ativado');
  const linksInternosMenu = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');
  function scrollToSection(event) {
    event.preventDefault();
    const href = this.getAttribute('href');
    const section = document.querySelector(href); // link entre link e seção.
    const sectionTop = section.offsetTop;
    window.scrollTo({ // método alternativo: scrollIntoView({behavior:'smooth', block:'start'}
      top: sectionTop,
      behavior: 'smooth',
    });
  }
  if (linksInternosMenu.length) {
    linksInternosMenu.forEach((item) => {
      item.addEventListener('click', scrollToSection);
    });
  }
}
