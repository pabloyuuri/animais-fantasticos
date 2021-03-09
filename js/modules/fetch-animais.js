import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  function createAnimal(animais) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `<h3>${animais.specie}</h3><span data-numero>${animais.total}</span>`;

    return div;
  }
  // Preenche cada animal no DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimais = createAnimal(animal);
    numerosGrid.appendChild(divAnimais);
  }

  // Anima os números de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  async function criarAnimais() {
    try {
      // Fetch espera a resposta e transforma em json.
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      // Após a transformação de json ativa as funções para preencher e animar os números
      // preencherAnimais() e animaAnimaisNumeros();
      animaisJSON.forEach((item) => {
        preencherAnimais(item);
      });
      animaAnimaisNumeros();
    } catch (error) {
      console.log(error);
    }
  }
  return criarAnimais();
}
