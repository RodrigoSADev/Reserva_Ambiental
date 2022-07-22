export default function initFetchBitcoin() {
  async function fetchBitcoin() {
    try {
      const bitResponse = await fetch("https://blockchain.info/ticker");
      const bitJson = await bitResponse.json();
      let btcPrice = document.querySelector(".btc-price");
      btcPrice.innerText = (1000 / bitJson.BRL.sell).toFixed(4);
    } catch (error) {
      console.log(error);
    }
  }
  fetchBitcoin();
}
