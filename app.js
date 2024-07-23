let lista = [];
let limite = 10
let ns = gerarN();
let tent = 1;

function mostrarT(tag, texto) {
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function msginicial() {
  mostrarT('h1','jogo do numero secreto');
mostrarT('p','escolha um numero de 1 a 10');
}
msginicial();

function verchute() {
    let chute = document.querySelector('input').value;
    
    if(chute == ns) {
      mostrarT('h1', 'acertou!');
      let ptent = tent > 1 ? 'tentativas' : 'tentativa';
      let msgtent = `voce descobriu o numero ${ns} com ${tent} ${ptent}`;
      mostrarT('p', msgtent);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
      if (chute > ns) {
        mostrarT('p', 'o numero é menor');
      } else {
        mostrarT('p', 'o numero é maior');
      } 
      tent++;
      limpar();
    }
}

function gerarN() {
  let numeroE = parseInt(Math.random() * limite + 1);
  let nelementos = lista.length;

if (nelementos == limite) {
  lista = []
}

if (lista.includes(numeroE)) {
  return gerarN();
} else {
  lista.push(numeroE);
  console.log(lista);
  return numeroE;
}
}

function limpar() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reniciar() {
  ns = gerarN();
  limpar();
  tent = 1;
  msginicial();
  document.getElementById('reiniciar').setAttribute('disabled', true)
}