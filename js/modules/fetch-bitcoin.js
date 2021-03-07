export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((json) => {
      const spanValor = document.querySelector('.btc-preco');
      spanValor.innerText = (1000 / json.BRL.sell).toFixed(4);
    }).catch((error) => {
      console.log(Error(error));
    });
}
