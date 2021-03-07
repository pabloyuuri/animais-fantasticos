export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');
    numeros.forEach((item) => {
      const total = +item.innerText; // string para number.
      const incremento = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        item.innerText = start;
        if (start >= total) {
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  // Usando Objeto Observer para ver mutações em um elemento.
  let observer;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }
  }

  const observerTarget = document.querySelector('.numeros');
  observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, { attributes: true });
}
