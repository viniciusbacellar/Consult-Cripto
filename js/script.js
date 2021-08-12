const inputMoeda = document.getElementById('inputMoeda');
const button = document.getElementById('btn');
const resultadoCripto = document.getElementById('valorMoeda');
const tipodaMoeda = document.getElementById('tipoDaMoeda');
const fraseHeader = document.getElementById('fraseHeader');
fraseHeader.innerHTML = `Este valor equivale a 1 da criptomoeda que você escolheu em reais:`
resultadoCripto.innerHTML = '> O VALOR APARECERA AQUI <'
button.addEventListener('click', handleClick)
function handleClick() {
  const tipo = inputMoeda.value;
  resultadoCripto.classList.add('ativo')
  setTimeout(function() {resultadoCripto.classList.remove('ativo')}, 1700)
  moeda(tipo);
}

function moeda(tipo) {
  fetch(`https://www.mercadobitcoin.net/api/${tipo}/ticker/`)
  .then(r => r.json())
  .then(tipo => {
      let numero = parseFloat(tipo.ticker.buy).toFixed(3);
      fraseHeader.innerHTML = `Este valor equivale a 1 ${inputMoeda.value} em reais:`
      resultadoCripto.innerHTML = 'R$ ' + numero.replace('.', ',')
    })
}


