export default function fetchBitcoin(url, target) {
  console.log('teste');
  console.log('teste12323');
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const spanValor = document.querySelector(target);
      spanValor.innerText = (1000 / json.BRL.sell).toFixed(4);
    }).catch((error) => {
      console.log(Error(error));
    });

  console.log('testando');
}
