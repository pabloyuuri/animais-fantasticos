import initAnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() {
  function createAnimal(animais) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `<h3>${animais.specie}</h3><span data-numero>${animais.total}</span>`;

    return div;
  }
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector('.numeros-grid');
      animaisJSON.forEach((item) => {
        const divAnimais = createAnimal(item);
        numerosGrid.appendChild(divAnimais);
      });
      initAnimaNumeros();
    } catch (error) {
      console.log(error);
    }
  }

  fetchAnimais('./js/animaisapi.json');
}
