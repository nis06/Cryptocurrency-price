var btc=document.getElementById("bitcoin");
var eth=document.getElementById("ethereum");
var teth=document.getElementById("tether");


fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Cethereum&vs_currencies=usd")
  .then(response => response.json())
  .then(data => {
    btc.innerHTML = data.bitcoin.usd;
    eth.innerHTML = data.ethereum.usd;
    teth.innerHTML = data.tether.usd;
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });