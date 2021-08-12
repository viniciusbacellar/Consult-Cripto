const inputMoeda = document.getElementById('inputMoeda');
const button = document.getElementById('btn');
const resultadoCripto = document.getElementById('valorMoeda');
const tipodaMoeda = document.getElementById('tipoDaMoeda');
resultadoCripto.innerHTML = '> O VALOR APARECERA AQUI <'
button.addEventListener('click', handleClick)
function handleClick() {
  const tipo = inputMoeda.value;
  moeda(tipo);
}

function moeda(tipo) {
  fetch(`https://www.mercadobitcoin.net/api/${tipo}/ticker/`)
  .then(r => r.json())
  .then(tipo => {
      let numero = parseFloat(tipo.ticker.buy).toFixed(3);
      resultadoCripto.innerHTML = 'R$ ' + numero.replace('.', ',')
    })
}